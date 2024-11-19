import { getIncomeData } from "@/redux/slices/budgetSlice";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const IncomePage = () => {
  const incomeData = useSelector(getIncomeData);
  return (
    <>
      <div className="max-w-6xl mx-auto mt-5 md:mt-10 p-4">
        <h1 className="text-2xl mb-5">Income Management Page</h1>
        <DataTable columns={columns} data={incomeData} />
      </div>
    </>
  );
};

export default IncomePage;
