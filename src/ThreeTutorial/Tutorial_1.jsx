import { Canvas } from "@react-three/fiber";
import React from "react";

const BoxGeometry = ({ position, color, side }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={side} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const ThreeTutorial_1 = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <group position={[0, 1, 0]}>
        <BoxGeometry position={[1, 0, 0]} color={"orange"} />

        <BoxGeometry position={[-1, 0, 0]} color={"brown"} />

        <BoxGeometry position={[1, 2, 0]} color={"blue"} />

        <BoxGeometry position={[-1, -2, 0]} color={"green"} />
      </group>
    </Canvas>
  );
};

export default ThreeTutorial_1;
