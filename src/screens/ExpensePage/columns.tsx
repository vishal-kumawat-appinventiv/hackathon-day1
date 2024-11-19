import { Budget } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { deleteBudget } from "@/redux/slices/budgetSlice";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DiaglogData from "@/components/DiaglogData";

export const columns: ColumnDef<Budget>[] = [
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "note",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Note
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const expenseRow = row.original;
      const dispatch: AppDispatch = useDispatch();
      const { toast } = useToast();

      const handleDelete = (id: string) => {
        dispatch(deleteBudget(id));
        toast({
          title: "Expense deleted successfully!",
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(expenseRow?.id)}
            >
              Copy Expense ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer hover:bg-gray-800 p-1 ml-1 rounded">
                  Edit Expense
                </div>
              </DialogTrigger>
              <DiaglogData title="Expense" edit={expenseRow} />
            </Dialog>
            <DropdownMenuItem onClick={() => handleDelete(expenseRow.id)}>
              Delete Expense
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
