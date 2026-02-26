-- Seed data for testing (development only)
-- Insert sample transactions with categories
INSERT INTO transactions (id, user_id, account_id, amount, transaction_type, description, status, category, direction, created_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 450.00, 'withdrawal', 'Whole Foods Market', 'completed', 'Food & Dining', 'debit', NOW() - INTERVAL '2 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 65.50, 'withdrawal', 'Shell Gas Station', 'completed', 'Transportation', 'debit', NOW() - INTERVAL '3 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 120.00, 'withdrawal', 'Amazon Purchase', 'completed', 'Shopping', 'debit', NOW() - INTERVAL '5 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 85.00, 'withdrawal', 'Netflix Subscription', 'completed', 'Entertainment', 'debit', NOW() - INTERVAL '7 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 3200.00, 'deposit', 'Monthly Salary', 'completed', 'Income', 'credit', NOW() - INTERVAL '10 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 45.00, 'withdrawal', 'Uber Ride', 'completed', 'Transportation', 'debit', NOW() - INTERVAL '12 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 200.00, 'withdrawal', 'Electric Bill', 'completed', 'Bills & Utilities', 'debit', NOW() - INTERVAL '15 days'),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', gen_random_uuid(), 150.00, 'withdrawal', 'Restaurant Dinner', 'completed', 'Food & Dining', 'debit', NOW() - INTERVAL '18 days');

-- Insert sample budgets
INSERT INTO budgets (id, user_id, category, monthly_limit, current_spent, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Food & Dining', 500.00, 450.00, NOW() - INTERVAL '30 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Transportation', 200.00, 110.50, NOW() - INTERVAL '30 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Shopping', 300.00, 120.00, NOW() - INTERVAL '30 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Entertainment', 150.00, 85.00, NOW() - INTERVAL '30 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Bills & Utilities', 400.00, 200.00, NOW() - INTERVAL '30 days', NOW());

-- Insert sample financial goals
INSERT INTO financial_goals (id, user_id, goal_name, target_amount, current_amount, target_date, goal_type, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Emergency Fund', 10000.00, 7500.00, NOW() + INTERVAL '6 months', 'savings', NOW() - INTERVAL '60 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Vacation Fund', 5000.00, 3200.00, NOW() + INTERVAL '8 months', 'savings', NOW() - INTERVAL '45 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'New Car', 25000.00, 12500.00, NOW() + INTERVAL '18 months', 'savings', NOW() - INTERVAL '90 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Home Down Payment', 50000.00, 18000.00, NOW() + INTERVAL '24 months', 'savings', NOW() - INTERVAL '120 days', NOW());

-- Insert sample notifications
INSERT INTO notifications (id, user_id, title, message, type, category, is_read, action_label, action_url, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Transfer Completed', '$500.00 transferred to John Doe successfully', 'success', 'transactions', false, 'View Details', '/transactions/123', NOW() - INTERVAL '5 minutes', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Suspicious Login Attempt', 'Someone tried to access your account from a new device', 'warning', 'security', false, 'Review Activity', '/security/activity', NOW() - INTERVAL '30 minutes', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'New Feature Available', 'Budget tracking is now available in your dashboard', 'info', 'system', true, NULL, NULL, NOW() - INTERVAL '2 hours', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Payment Failed', 'Your monthly subscription payment could not be processed', 'error', 'transactions', false, 'Update Payment Method', '/settings/payment', NOW() - INTERVAL '1 day', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Investment Milestone', 'Your portfolio has reached $10,000 in value!', 'success', 'account', true, NULL, NULL, NOW() - INTERVAL '2 days', NOW());

-- Insert sample rewards
INSERT INTO rewards (id, user_id, reward_type, amount, description, is_redeemed, earned_date, redeemed_date, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'cashback', 25.00, '2% cashback on grocery purchases', false, NOW() - INTERVAL '5 days', NULL, NOW() - INTERVAL '5 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'points', 15.00, '1000 points converted to cash', false, NOW() - INTERVAL '10 days', NULL, NOW() - INTERVAL '10 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'bonus', 50.00, 'New account welcome bonus', true, NOW() - INTERVAL '30 days', NOW() - INTERVAL '15 days', NOW() - INTERVAL '30 days', NOW());

-- Insert sample investment accounts and positions
INSERT INTO investment_accounts (id, user_id, provider, name, total_value, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 'Fidelity', 'Brokerage Account', 125000.00, NOW() - INTERVAL '1 year', NOW());

INSERT INTO investment_positions (id, investment_account_id, asset_class, symbol, quantity, current_price, pct_change, last_updated, created_at, updated_at) VALUES
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'stocks', 'AAPL', 100, 175.50, 12.5, NOW(), NOW() - INTERVAL '30 days', NOW()),
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'stocks', 'MSFT', 50, 380.25, 8.3, NOW(), NOW() - INTERVAL '45 days', NOW()),
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'bonds', 'US Treasury', 1, 31200.00, 4.2, NOW(), NOW() - INTERVAL '60 days', NOW()),
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'real_estate', 'REIT Fund', 150, 192.67, 8.7, NOW(), NOW() - INTERVAL '90 days', NOW()),
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'crypto', 'BTC', 0.5, 39600.00, -2.3, NOW(), NOW() - INTERVAL '15 days', NOW()),
  (gen_random_uuid(), (SELECT id FROM investment_accounts WHERE user_id = '00000000-0000-0000-0000-000000000001' LIMIT 1), 'cash', 'Money Market', 1, 3000.00, 0.5, NOW(), NOW() - INTERVAL '5 days', NOW());

-- Insert sample income events
INSERT INTO income_events (id, user_id, amount, source, description, received_at, created_at, updated_at) VALUES
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 3200.00, 'payroll', 'Monthly salary', NOW() - INTERVAL '10 days', NOW() - INTERVAL '10 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 150.00, 'dividend', 'Q4 dividend payment', NOW() - INTERVAL '20 days', NOW() - INTERVAL '20 days', NOW()),
  (gen_random_uuid(), '00000000-0000-0000-0000-000000000001', 25.50, 'interest', 'Savings account interest', NOW() - INTERVAL '25 days', NOW() - INTERVAL '25 days', NOW());
