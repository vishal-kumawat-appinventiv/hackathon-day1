import ExpensePage from "@/screens/ExpensePage";
import HomePage from "@/screens/HomePage";
import IncomePage from "@/screens/IncomePage";

export const ROUTES = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/expense",
    component: ExpensePage,
  },
  {
    path: "/income",
    component: IncomePage,
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
