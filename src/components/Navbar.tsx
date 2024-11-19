import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="p-2 flex items-center justify-between bg-gray-100 dark:bg-background">
      <div>
        <h1 className="text-2xl">Expense Tracker</h1>
      </div>
      <div className="hidden md:block pr-14">
        <p>Made by Vishal Kumawat for Appinventiv Hackathon</p>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
