import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TimeFrame } from "@/lib/types";
import { COLORS } from "@/lib/constants";

interface ChartProps {
  timeFrame: TimeFrame;
  data: { Income: number; Expense: number };
}

const MyCharts: React.FC<ChartProps> = ({ timeFrame, data }) => {
  const chartData = [
    { name: "Income", value: data.Income },
    { name: "Expense", value: data.Expense },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="capitalize">{timeFrame} Insights</CardTitle>
        <CardDescription>
          Total income and expenses for the {timeFrame}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center">
        <ChartContainer
          config={{
            Income: {
              label: "Income",
              color: COLORS.Income,
            },
            Expense: {
              label: "Expense",
              color: COLORS.Expense,
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                labelLine={false}
                outerRadius={100}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[entry.name as keyof typeof COLORS]}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MyCharts;
