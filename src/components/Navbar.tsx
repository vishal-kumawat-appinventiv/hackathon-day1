import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 dark:bg-background">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl">Expense Tracker</h1>
        </div>
        <div className="hidden md:block pr-14">
          <p>Made by Vishal Kumawat for Appinventiv Hackathon</p>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
