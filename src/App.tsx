import { Gym } from "./components/Gym";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Gym />
      <Overlay />
    </div>
  );
}

export default App;
