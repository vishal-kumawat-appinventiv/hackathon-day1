import DiaglogData from "@/components/DiaglogData";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FilePenLine, SquarePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-5 md:mt-16 p-4">
      {/* TopBar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Card className="h-full bg-blue-200 dark:bg-blue-950">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-full">
                <h2>Net Profit</h2>
                <h1>₹ 12,000</h1>
              </CardTitle>
              <CardDescription>Total Expense - Total Income</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Card className="bg-green-200 dark:bg-green-950">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-full">
                <h2>Total Income</h2>
                <h1>₹ 18,000</h1>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-red-200 dark:bg-red-950">
            <CardHeader>
              <CardTitle className="flex items-center justify-between w-full">
                <h2>Total Expense</h2>
                <h1>₹ 6000</h1>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Add Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <Dialog>
          <DialogTrigger asChild>
            <Card className="hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between w-full">
                  Add Income <SquarePlus size={30} />
                </CardTitle>
                <CardDescription>Add a new income details.</CardDescription>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DiaglogData title="Income" />
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Card className="hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between w-full">
                  Add Expense <SquarePlus size={30} />
                </CardTitle>
                <CardDescription>Add a new expense details.</CardDescription>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DiaglogData title="Expense" />
        </Dialog>
      </div>

      {/* Manage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <Card
          className="py-5 hover:cursor-pointer"
          onClick={() => navigate("/income")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              Manage Income <FilePenLine size={30} />
            </CardTitle>
            <CardDescription>Manage the expense details.</CardDescription>
          </CardHeader>
        </Card>
        <Card
          className="py-5 hover:cursor-pointer"
          onClick={() => navigate("/expense")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              Manage Expense <FilePenLine size={30} />
            </CardTitle>
            <CardDescription>Manage the expense details.</CardDescription>
          </CardHeader>
        </Card>
        <Card
          className="py-5 hover:cursor-pointer"
          onClick={() => navigate("/full-budget-details")}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              Manage Budget <FilePenLine size={30} />
            </CardTitle>
            <CardDescription>Manage the full budget details.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
