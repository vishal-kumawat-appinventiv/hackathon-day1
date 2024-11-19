import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hackathon</h1>
      <Button>Vishal Kumawat</Button>
      <ModeToggle />
    </>
  );
};

export default App;
