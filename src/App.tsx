import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./lib/constants";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <div className="dark:bg-black min-h-screen">
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
