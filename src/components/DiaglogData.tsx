import {
  DialogClose,
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
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addBudget } from "@/redux/slices/budgetSlice";
import { useToast } from "@/hooks/use-toast";

interface Props {
  title: "Income" | "Expense";
}

const DiaglogData: React.FC<Props> = ({ title }) => {
  const dispatch: AppDispatch = useDispatch();
  const { toast } = useToast();

  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [note, setNote] = useState<string>("");

  const handleAddBudgetBtn = () => {
    const newId = uuidv4();

    const data = {
      category,
      amount,
      date: date.toString(),
      note,
      id: newId.toString(),
    };

    if (title === "Income") {
      dispatch(addBudget({ ...data, type: "Income" }));
    } else if (title === "Expense") {
      dispatch(addBudget({ ...data, type: "Expense" }));
    }
    toast({
      title: title + " added successfully!",
    });
  };

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
          <Select onValueChange={(e) => setCategory(e)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder={"Select a category"} />
            </SelectTrigger>
            <SelectContent>
              {(title === "Income"
                ? INCOME_CATEGORIES
                : EXPENSE_CATEGORIES
              ).map((c) => {
                return (
                  <SelectItem value={c} key={c}>
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
            placeholder="Enter amount"
            className="col-span-3"
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col md:grid grid-cols-4 items-center gap-4">
          <Label htmlFor="date" className="text-right mt-3 md:mt-0">
            Date
          </Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate as any}
            className="rounded-md border col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="note" className="text-right">
            Note
          </Label>
          <Input
            id="note"
            placeholder="Enter note"
            className="col-span-3"
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" onClick={handleAddBudgetBtn}>
            Add {title}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default DiaglogData;
