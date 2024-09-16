import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./index.routes";

const RapierPhysics = () => {
  return (
    <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
      <OrbitControls />

      <Physics>
        {/* <RapierTutorial_1 /> */}
        {/* <RapierTutorial_2 /> */}

        {/* game example */}
        {/* <RapierTutorial_3 /> */}

        {/* <RapierTutorial_4 /> */}
        <RapierTutorial_5 />
      </Physics>
    </Canvas>
  );
};

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          {routes.map((singleRoutes) => (
            <Route
              path={singleRoutes.route}
              element={<singleRoutes.element />}
              key={singleRoutes.route}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
