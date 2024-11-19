import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INCOME_CATEGORIES } from "@/lib/constants";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const HomePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Add Income</DialogTitle>
              <DialogDescription>Enter your income details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-2 md:gap-4 py-2 md:py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Salary" />
                  </SelectTrigger>
                  <SelectContent>
                    {INCOME_CATEGORIES.map((c) => {
                      return (
                        <SelectItem value="light" key={c}>
                          {c}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  defaultValue="12000"
                  className="col-span-3"
                  type="number"
                />
              </div>
              <div className="flex flex-col md:grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right mt-3 md:mt-0">
                  Date
                </Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Note
                </Label>
                <Input
                  id="note"
                  defaultValue="Appinventiv"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
