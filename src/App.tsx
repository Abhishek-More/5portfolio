import { Routes, Route } from "react-router-dom";
import { Gym } from "./components/Gym";
import { Loading } from "./components/Loading";
import { Overlay } from "./components/Overlay";
import { Simple } from "./components/Simple";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
            <Loading />
            <Gym />
            <Overlay />
          </div>
        }
      />
      <Route path="/simple" element={<Simple />} />
    </Routes>
  );
}

export default App;
