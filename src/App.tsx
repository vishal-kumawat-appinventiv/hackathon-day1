import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./lib/constants";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";

const App = () => {
  const budgetData = useSelector((state: RootState) => state.budget.data);

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgetData));
  }, [budgetData]);

  return (
    <div className="dark:bg-black min-h-screen overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
