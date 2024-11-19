import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePlus } from "lucide-react";
const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              Add Income <SquarePlus size={30} />
            </CardTitle>
            <CardDescription>Add the income details.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover:cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              Add Expense <SquarePlus size={30} />
            </CardTitle>
            <CardDescription>Add the expense details.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
