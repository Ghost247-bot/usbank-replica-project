-- Create RPC function for spending by category
CREATE OR REPLACE FUNCTION rpc_get_spending_by_category(
  p_user_id UUID DEFAULT NULL,
  p_period_start TIMESTAMPTZ DEFAULT NULL,
  p_period_end TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (
  category TEXT,
  amount NUMERIC,
  percentage NUMERIC
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    t.category,
    SUM(t.amount) as amount,
    ROUND(
      (SUM(t.amount) / NULLIF(SUM(SUM(t.amount)) OVER (), 0)) * 100, 
      2
    ) as percentage
  FROM transactions t
  WHERE 
    t.user_id = COALESCE(p_user_id, auth.uid())
    AND t.direction = 'debit'
    AND t.created_at >= COALESCE(p_period_start, date_trunc('month', NOW()))
    AND t.created_at < COALESCE(p_period_end, date_trunc('month', NOW()) + INTERVAL '1 month')
    AND t.category IS NOT NULL
  GROUP BY t.category
  ORDER BY amount DESC;
$$;

-- Create RPC function for monthly trends
CREATE OR REPLACE FUNCTION rpc_get_monthly_trends(
  p_user_id UUID DEFAULT NULL,
  p_months_back INTEGER DEFAULT 6
)
RETURNS TABLE (
  month TEXT,
  income NUMERIC,
  expenses NUMERIC,
  savings NUMERIC
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH monthly_data AS (
    SELECT 
      DATE_TRUNC('month', created_at) as month,
      direction,
      SUM(amount) as amount
    FROM transactions
    WHERE 
      user_id = COALESCE(p_user_id, auth.uid())
      AND created_at >= DATE_TRUNC('month', NOW()) - INTERVAL '1 month' * p_months_back
    GROUP BY DATE_TRUNC('month', created_at), direction
  ),
  income_data AS (
    SELECT month, COALESCE(SUM(amount), 0) as income
    FROM monthly_data
    WHERE direction = 'credit'
    GROUP BY month
  ),
  expense_data AS (
    SELECT month, COALESCE(SUM(amount), 0) as expenses
    FROM monthly_data
    WHERE direction = 'debit'
    GROUP BY month
  )
  SELECT 
    TO_CHAR(i.month, 'Mon') as month,
    i.income,
    COALESCE(e.expenses, 0) as expenses,
    i.income - COALESCE(e.expenses, 0) as savings
  FROM income_data i
  LEFT JOIN expense_data e ON i.month = e.month
  ORDER BY i.month DESC
  LIMIT p_months_back;
$$;

-- Create RPC function for budget utilization
CREATE OR REPLACE FUNCTION rpc_get_budget_utilization(
  p_user_id UUID DEFAULT NULL,
  p_period_start TIMESTAMPTZ DEFAULT NULL,
  p_period_end TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (
  category TEXT,
  budget_limit NUMERIC,
  current_spent NUMERIC,
  utilization_percentage NUMERIC,
  remaining NUMERIC
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH budget_data AS (
    SELECT 
      b.category,
      b.monthly_limit as budget_limit
    FROM budgets b
    WHERE 
      b.user_id = COALESCE(p_user_id, auth.uid())
  ),
  spending_data AS (
    SELECT 
      t.category,
      SUM(t.amount) as current_spent
    FROM transactions t
    WHERE 
      t.user_id = COALESCE(p_user_id, auth.uid())
      AND t.direction = 'debit'
      AND t.created_at >= COALESCE(p_period_start, date_trunc('month', NOW()))
      AND t.created_at < COALESCE(p_period_end, date_trunc('month', NOW()) + INTERVAL '1 month')
      AND t.category IS NOT NULL
    GROUP BY t.category
  )
  SELECT 
    COALESCE(bd.category, sd.category) as category,
    COALESCE(bd.budget_limit, 0) as budget_limit,
    COALESCE(sd.current_spent, 0) as current_spent,
    CASE 
      WHEN bd.budget_limit > 0 THEN 
        ROUND((sd.current_spent / bd.budget_limit) * 100, 2)
      ELSE 0 
    END as utilization_percentage,
    GREATEST(bd.budget_limit - COALESCE(sd.current_spent, 0), 0) as remaining
  FROM budget_data bd
  FULL OUTER JOIN spending_data sd ON bd.category = sd.category
  ORDER BY utilization_percentage DESC;
$$;

-- Create RPC function for portfolio summary
CREATE OR REPLACE FUNCTION rpc_get_portfolio_summary(
  p_user_id UUID DEFAULT NULL
)
RETURNS TABLE (
  asset_class TEXT,
  market_value NUMERIC,
  percentage NUMERIC,
  pct_change NUMERIC
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH portfolio_data AS (
    SELECT 
      ip.asset_class,
      SUM(ip.market_value) as market_value,
      AVG(ip.pct_change) as pct_change
    FROM investment_positions ip
    JOIN investment_accounts ia ON ip.investment_account_id = ia.id
    WHERE 
      ia.user_id = COALESCE(p_user_id, auth.uid())
    GROUP BY ip.asset_class
  ),
  total_value AS (
    SELECT SUM(market_value) as total
    FROM portfolio_data
  )
  SELECT 
    pd.asset_class,
    pd.market_value,
    ROUND((pd.market_value / tv.total) * 100, 2) as percentage,
    pd.pct_change
  FROM portfolio_data pd
  CROSS JOIN total_value tv
  ORDER BY pd.market_value DESC;
$$;

-- Create RPC function for analytics summary
CREATE OR REPLACE FUNCTION rpc_get_analytics_summary(
  p_user_id UUID DEFAULT NULL,
  p_period_start TIMESTAMPTZ DEFAULT NULL,
  p_period_end TIMESTAMPTZ DEFAULT NULL
)
RETURNS TABLE (
  total_balance NUMERIC,
  monthly_income NUMERIC,
  monthly_expenses NUMERIC,
  savings_rate NUMERIC,
  budget_utilization NUMERIC
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  WITH 
  account_balances AS (
    SELECT COALESCE(SUM(balance), 0) as total_balance
    FROM accounts
    WHERE user_id = COALESCE(p_user_id, auth.uid())
  ),
  monthly_income AS (
    SELECT COALESCE(SUM(amount), 0) as income
    FROM transactions
    WHERE 
      user_id = COALESCE(p_user_id, auth.uid())
      AND direction = 'credit'
      AND created_at >= COALESCE(p_period_start, date_trunc('month', NOW()))
      AND created_at < COALESCE(p_period_end, date_trunc('month', NOW()) + INTERVAL '1 month')
  ),
  monthly_expenses AS (
    SELECT COALESCE(SUM(amount), 0) as expenses
    FROM transactions
    WHERE 
      user_id = COALESCE(p_user_id, auth.uid())
      AND direction = 'debit'
      AND created_at >= COALESCE(p_period_start, date_trunc('month', NOW()))
      AND created_at < COALESCE(p_period_end, date_trunc('month', NOW()) + INTERVAL '1 month')
  ),
  budget_util AS (
    SELECT 
      CASE 
        WHEN SUM(monthly_limit) > 0 THEN 
          ROUND((SUM(current_spent) / SUM(monthly_limit)) * 100, 2)
        ELSE 0 
      END as utilization
    FROM rpc_get_budget_utilization(p_user_id, p_period_start, p_period_end)
  )
  SELECT 
    ab.total_balance,
    mi.income as monthly_income,
    me.expenses as monthly_expenses,
    CASE 
      WHEN mi.income > 0 THEN 
        ROUND(((mi.income - me.expenses) / mi.income) * 100, 2)
      ELSE 0 
    END as savings_rate,
    COALESCE(bu.utilization, 0) as budget_utilization
  FROM account_balances ab, monthly_income mi, monthly_expenses me, budget_util bu;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION rpc_get_spending_by_category TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION rpc_get_monthly_trends TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION rpc_get_budget_utilization TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION rpc_get_portfolio_summary TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION rpc_get_analytics_summary TO authenticated, service_role;
