import ExpensePage from "@/screens/ExpensePage";
import HomePage from "@/screens/HomePage";

export const ROUTES = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/expense",
    component: ExpensePage,
  },
];

export const INCOME_CATEGORIES: string[] = [
  "Salary",
  "Investment",
  "Part-Time",
  "Bonus",
  "Other",
];

export const EXPENSE_CATEGORIES: string[] = [
  "Food",
  "Transport",
  "Shopping",
  "Entertainment",
  "Other",
];
