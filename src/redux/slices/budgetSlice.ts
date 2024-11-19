import { Budget } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "../store";

interface BudgetState {
  data: Budget[];
}

const getInitialBudgets = () => {
  const existingBudgets = localStorage.getItem("budgets");
  return existingBudgets ? JSON.parse(existingBudgets) : [];
};

const initialState: BudgetState = {
  data: getInitialBudgets(),
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.data.push(action.payload);
    },
    deleteBudget: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (budget) => budget.id !== action.payload.toString()
      );
    },
    updateBudget: (state, action: PayloadAction<Budget>) => {
      const index = state.data.findIndex(
        (budget) => budget.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    clearIncome: (state) => {
      state.data = state.data.filter((budget) => budget.type !== "Income");
    },
    clearExpense: (state) => {
      state.data = state.data.filter((budget) => budget.type !== "Expense");
    },
    clearBudget: (state) => {
      state.data = [];
    },
  },
});

export default budgetSlice.reducer;

export const {
  addBudget,
  deleteBudget,
  updateBudget,
  clearBudget,
  clearIncome,
  clearExpense,
} = budgetSlice.actions;

export const getIncomeData = createSelector(
  (state: RootState) => state.budget.data,
  (budgetData) => budgetData.filter((budget) => budget.type === "Income")
);

export const getExpenseData = createSelector(
  (state: RootState) => state.budget.data,
  (budgetData) => budgetData.filter((budget) => budget.type === "Expense")
);

export const getBudgetData = createSelector(
  (state: RootState) => state.budget.data,
  (budgetData) => budgetData
);

export const getTotalIncome = createSelector(
  (state: RootState) => state.budget.data,
  (budgetData) =>
    budgetData
      .filter((budget) => budget.type === "Income")
      .reduce((total, budget) => total + budget.amount, 0)
);

export const getTotalExpense = createSelector(
  (state: RootState) => state.budget.data,
  (budgetData) =>
    budgetData
      .filter((budget) => budget.type === "Expense")
      .reduce((total, budget) => total + budget.amount, 0)
);
