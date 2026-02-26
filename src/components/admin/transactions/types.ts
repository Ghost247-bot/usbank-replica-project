
export type TransactionStatus = "pending" | "completed" | "failed" | "cancelled";
export type TransactionType = "deposit" | "withdrawal" | "transfer" | "payment" | "fee" | "interest";

export interface Transaction {
  id: string;
  account_id: string;
  amount: number;
  transaction_type: TransactionType;
  description: string;
  status: TransactionStatus;
  created_at: string;
  reference_number?: string;
}

export interface Account {
  id: string;
  account_number: string;
  account_name: string;
  user_id: string;
}

export interface CreateTransactionForm {
  account_id: string;
  amount: string;
  description: string;
  transaction_type: TransactionType;
  status: TransactionStatus;
}

export interface EditTransactionForm {
  amount: string;
  description: string;
  status: TransactionStatus;
  transaction_type: TransactionType;
}
