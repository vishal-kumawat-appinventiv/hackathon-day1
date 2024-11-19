export interface Budget {
  id: string;
  type: "Income" | "Expense";
  category: string;
  amount: number;
  date: string;
  note: string;
}
