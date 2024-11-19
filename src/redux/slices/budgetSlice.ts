import { Budget } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BudgetState {
  data: Budget[];
}

const initialState: BudgetState = {
  data: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Budget>) => {
      state.data.push(action.payload);
    },
    addExpense: (state, action: PayloadAction<Budget>) => {
      state.data.push(action.payload);
    },
    deleteBudget: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((budget) => budget.id !== action.payload);
    },
    updateBudget: (state, action: PayloadAction<Budget>) => {
      const index = state.data.findIndex(
        (budget) => budget.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    clearBudget: (state) => {
      state.data = [];
    },
  },
});

export default budgetSlice.reducer;
