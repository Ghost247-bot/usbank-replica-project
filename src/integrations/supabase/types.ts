export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          account_name: string
          account_number: string
          account_type: Database["public"]["Enums"]["account_type"]
          balance: number
          created_at: string
          freeze_reason: string | null
          frozen_at: string | null
          frozen_by: string | null
          id: string
          is_frozen: boolean | null
          status: Database["public"]["Enums"]["account_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_number: string
          account_type: Database["public"]["Enums"]["account_type"]
          balance?: number
          created_at?: string
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          is_frozen?: boolean | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_number?: string
          account_type?: Database["public"]["Enums"]["account_type"]
          balance?: number
          created_at?: string
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          is_frozen?: boolean | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_actions: {
        Row: {
          action_details: Json | null
          action_type: string
          admin_user_id: string
          created_at: string | null
          id: string
          reason: string | null
          target_user_id: string | null
        }
        Insert: {
          action_details?: Json | null
          action_type: string
          admin_user_id: string
          created_at?: string | null
          id?: string
          reason?: string | null
          target_user_id?: string | null
        }
        Update: {
          action_details?: Json | null
          action_type?: string
          admin_user_id?: string
          created_at?: string | null
          id?: string
          reason?: string | null
          target_user_id?: string | null
        }
        Relationships: []
      }
      bills: {
        Row: {
          amount: number
          bill_name: string
          category: string | null
          created_at: string
          due_date: string
          frequency: string
          id: string
          is_paid: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          bill_name: string
          category?: string | null
          created_at?: string
          due_date: string
          frequency?: string
          id?: string
          is_paid?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          bill_name?: string
          category?: string | null
          created_at?: string
          due_date?: string
          frequency?: string
          id?: string
          is_paid?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      budgets: {
        Row: {
          category: string
          created_at: string
          current_spent: number | null
          id: string
          monthly_limit: number
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          current_spent?: number | null
          id?: string
          monthly_limit: number
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          current_spent?: number | null
          id?: string
          monthly_limit?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      credit_cards: {
        Row: {
          card_number: string
          card_type: string
          created_at: string
          credit_limit: number
          current_balance: number
          expiry_date: string
          freeze_reason: string | null
          frozen_at: string | null
          frozen_by: string | null
          id: string
          interest_rate: number
          is_frozen: boolean | null
          status: Database["public"]["Enums"]["account_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          card_number: string
          card_type: string
          created_at?: string
          credit_limit: number
          current_balance?: number
          expiry_date: string
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          interest_rate: number
          is_frozen?: boolean | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          card_number?: string
          card_type?: string
          created_at?: string
          credit_limit?: number
          current_balance?: number
          expiry_date?: string
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          interest_rate?: number
          is_frozen?: boolean | null
          status?: Database["public"]["Enums"]["account_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_cards_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      dashboard_banners: {
        Row: {
          banner_type: string
          created_at: string | null
          created_by: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          message: string
          target_user_id: string | null
          title: string
        }
        Insert: {
          banner_type?: string
          created_at?: string | null
          created_by: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          message: string
          target_user_id?: string | null
          title: string
        }
        Update: {
          banner_type?: string
          created_at?: string | null
          created_by?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          message?: string
          target_user_id?: string | null
          title?: string
        }
        Relationships: []
      }
      financial_goals: {
        Row: {
          created_at: string
          current_amount: number | null
          goal_name: string
          goal_type: string
          id: string
          target_amount: number
          target_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_amount?: number | null
          goal_name: string
          goal_type: string
          id?: string
          target_amount: number
          target_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_amount?: number | null
          goal_name?: string
          goal_type?: string
          id?: string
          target_amount?: number
          target_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      loans: {
        Row: {
          created_at: string
          current_balance: number
          id: string
          interest_rate: number
          loan_type: string
          monthly_payment: number
          next_payment_date: string | null
          principal_amount: number
          status: string
          term_months: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_balance: number
          id?: string
          interest_rate: number
          loan_type: string
          monthly_payment: number
          next_payment_date?: string | null
          principal_amount: number
          status?: string
          term_months: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_balance?: number
          id?: string
          interest_rate?: number
          loan_type?: string
          monthly_payment?: number
          next_payment_date?: string | null
          principal_amount?: number
          status?: string
          term_months?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "loans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: Json | null
          created_at: string
          date_of_birth: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          pin: string | null
          profile_picture_url: string | null
          security_answer_1: string | null
          security_answer_2: string | null
          security_question_1: string | null
          security_question_2: string | null
          ssn_iban: string | null
          updated_at: string
        }
        Insert: {
          address?: Json | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          pin?: string | null
          profile_picture_url?: string | null
          security_answer_1?: string | null
          security_answer_2?: string | null
          security_question_1?: string | null
          security_question_2?: string | null
          ssn_iban?: string | null
          updated_at?: string
        }
        Update: {
          address?: Json | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          pin?: string | null
          profile_picture_url?: string | null
          security_answer_1?: string | null
          security_answer_2?: string | null
          security_question_1?: string | null
          security_question_2?: string | null
          ssn_iban?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      rewards: {
        Row: {
          amount: number
          description: string | null
          earned_date: string
          id: string
          is_redeemed: boolean | null
          redeemed_date: string | null
          reward_type: string
          user_id: string
        }
        Insert: {
          amount: number
          description?: string | null
          earned_date?: string
          id?: string
          is_redeemed?: boolean | null
          redeemed_date?: string | null
          reward_type: string
          user_id: string
        }
        Update: {
          amount?: number
          description?: string | null
          earned_date?: string
          id?: string
          is_redeemed?: boolean | null
          redeemed_date?: string | null
          reward_type?: string
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          account_id: string
          amount: number
          created_at: string
          description: string | null
          id: string
          reference_number: string | null
          status: Database["public"]["Enums"]["transaction_status"]
          to_account_id: string | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }
        Insert: {
          account_id: string
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          reference_number?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          to_account_id?: string | null
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Update: {
          account_id?: string
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          reference_number?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          to_account_id?: string | null
          transaction_type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_to_account_id_fkey"
            columns: ["to_account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_status: {
        Row: {
          created_at: string | null
          freeze_reason: string | null
          frozen_at: string | null
          frozen_by: string | null
          id: string
          is_frozen: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          is_frozen?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          freeze_reason?: string | null
          frozen_at?: string | null
          frozen_by?: string | null
          id?: string
          is_frozen?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_status_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_account_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      toggle_account_freeze: {
        Args: { account_id: string; freeze_status: boolean; reason?: string }
        Returns: undefined
      }
      toggle_card_freeze: {
        Args: { card_id: string; freeze_status: boolean; reason?: string }
        Returns: undefined
      }
      toggle_user_freeze: {
        Args: {
          target_user_id: string
          freeze_status: boolean
          reason?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      account_status: "active" | "inactive" | "frozen" | "closed"
      account_type:
        | "checking"
        | "savings"
        | "credit_card"
        | "loan"
        | "investment"
        | "escrow"
      transaction_status: "pending" | "completed" | "failed" | "cancelled"
      transaction_type:
        | "deposit"
        | "withdrawal"
        | "transfer"
        | "payment"
        | "fee"
        | "interest"
      user_role: "admin" | "user" | "moderator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_status: ["active", "inactive", "frozen", "closed"],
      account_type: [
        "checking",
        "savings",
        "credit_card",
        "loan",
        "investment",
        "escrow",
      ],
      transaction_status: ["pending", "completed", "failed", "cancelled"],
      transaction_type: [
        "deposit",
        "withdrawal",
        "transfer",
        "payment",
        "fee",
        "interest",
      ],
      user_role: ["admin", "user", "moderator"],
    },
  },
} as const
