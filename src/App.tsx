import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./lib/constants";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
