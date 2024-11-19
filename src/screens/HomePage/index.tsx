import DiaglogData from "@/components/DiaglogData";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SquarePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dialog>
          <DialogTrigger>
            <Card className="hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between w-full">
                  Add Income <SquarePlus size={30} />
                </CardTitle>
                <CardDescription>Add the income details.</CardDescription>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DiaglogData title="Income" />
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Card className="hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between w-full">
                  Add Expense <SquarePlus size={30} />
                </CardTitle>
                <CardDescription>Add the expense details.</CardDescription>
              </CardHeader>
            </Card>
          </DialogTrigger>
          <DiaglogData title="Expense" />
        </Dialog>
      </div>
    </div>
  );
};

export default HomePage;
