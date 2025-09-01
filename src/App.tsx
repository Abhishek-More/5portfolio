import { Gym } from "./components/Gym";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <Gym />
      <Overlay />
    </div>
  );
}

export default App;
