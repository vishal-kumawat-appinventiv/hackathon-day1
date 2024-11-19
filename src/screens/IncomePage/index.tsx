import { getIncomeData } from "@/redux/slices/budgetSlice";
import { useSelector } from "react-redux";

const IncomePage = () => {

  const incomeData = useSelector(getIncomeData);

  console.log(incomeData);

  return <div>IncomePage</div>;
};

export default IncomePage;
