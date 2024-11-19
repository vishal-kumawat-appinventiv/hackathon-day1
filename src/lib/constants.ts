import ExpensePage from "@/screens/ExpensePage";
import FullBudget from "@/screens/FullBudget";
import HomePage from "@/screens/HomePage";
import IncomePage from "@/screens/IncomePage";
import NotFound from "@/screens/NotFound";

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
  {
    path: "/*",
    component: NotFound,
  },
  {
    path: "/full-budget-details",
    component: FullBudget,
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
