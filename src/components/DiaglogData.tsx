import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "@/lib/constants";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

interface Props {
  title: "Income" | "Expense";
}

const DiaglogData: React.FC<Props> = ({ title }) => {
  //@ts-ignore
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl">Add {title}</DialogTitle>
        <DialogDescription>Enter your {title} details.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-2 md:gap-4 py-2 md:py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue
                placeholder={
                  title === "Income"
                    ? INCOME_CATEGORIES[0]
                    : EXPENSE_CATEGORIES[0]
                }
              />
            </SelectTrigger>
            <SelectContent>
              {(title === "Income"
                ? INCOME_CATEGORIES
                : EXPENSE_CATEGORIES
              ).map((c) => {
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
          <Input id="note" defaultValue="Appinventiv" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Add {title}</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DiaglogData;
