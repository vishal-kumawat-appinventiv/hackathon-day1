export interface Budget {
  id: number;
  type: "Income" | "Expense";
  category: string;
  amount: number;
  date: Date;
  note: string;
}
