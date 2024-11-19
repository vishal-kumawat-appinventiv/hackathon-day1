import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  isWithinInterval,
} from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Budget } from "@/lib/types";
import { RootState } from "@/redux/store";
import MyCharts from "./MyCharts";

const Insights = () => {
  const budgets = useSelector((state: RootState) => state.budget.data);

  const calculateTotals = (startDate: Date, endDate: Date) => {
    return budgets.reduce(
      (acc: { Income: number; Expense: number }, budget: Budget) => {
        const budgetDate = new Date(budget.date);
        if (isWithinInterval(budgetDate, { start: startDate, end: endDate })) {
          acc[budget.type] += budget.amount;
        }
        return acc;
      },
      { Income: 0, Expense: 0 }
    );
  };

  const today = useMemo(() => new Date(), []);
  const dayData = useMemo(
    () => calculateTotals(startOfDay(today), today),
    [today, budgets]
  );
  const weekData = useMemo(
    () => calculateTotals(startOfWeek(today), today),
    [today, budgets]
  );
  const monthData = useMemo(
    () => calculateTotals(startOfMonth(today), today),
    [today, budgets]
  );

  return (
    <div className="mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-6">Detailed Insights</h1>
      <Tabs defaultValue="day" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
        <TabsContent value="day">
          <MyCharts timeFrame="day" data={dayData} />
        </TabsContent>
        <TabsContent value="week">
          <MyCharts timeFrame="week" data={weekData} />
        </TabsContent>
        <TabsContent value="month">
          <MyCharts timeFrame="month" data={monthData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Insights;
