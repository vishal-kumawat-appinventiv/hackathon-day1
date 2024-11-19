import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="p-2 flex items-center justify-between bg-gray-100 dark:bg-background">
      <div>
        <h1 className="text-2xl">Expense Tracker</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
