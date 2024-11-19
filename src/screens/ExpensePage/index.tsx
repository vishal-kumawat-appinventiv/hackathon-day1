import { getExpenseData } from "@/redux/slices/budgetSlice";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ExpensePage = () => {
  const expenseData = useSelector(getExpenseData);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-5 md:mt-4 p-4">
        <h1 className="text-2xl mb-2">Expense Management Page</h1>
        <DataTable columns={columns} data={expenseData} />
      </div>
    </>
  );
};

export default ExpensePage;
