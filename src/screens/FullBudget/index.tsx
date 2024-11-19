import { getBudgetData } from "@/redux/slices/budgetSlice";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const FullBudget = () => {
  const Data = useSelector(getBudgetData);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-5 md:mt-4 p-4">
        <h1 className="text-2xl mb-2">Budget Management Page</h1>
        <DataTable columns={columns} data={Data} />
      </div>
    </>
  );
};

export default FullBudget;
