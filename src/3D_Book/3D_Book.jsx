import React from "react";
import { UI } from "./Ux";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";

const Book_3D_Tutorial = () => {
  return (
    <div className="w-screen h-screen bg-[radial-gradient(circle_at_center,_#5a47ce,_#232323_80%)]">
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
};

export default Book_3D_Tutorial;
