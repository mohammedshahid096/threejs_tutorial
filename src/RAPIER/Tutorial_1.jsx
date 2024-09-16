import React from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MainComponent = () => {
  return (
    <>
      {/* Setup lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <RigidBody>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>

      <RigidBody restitution={1.5} friction={0.2}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>

      <RigidBody gravityScale={0}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>
    </>
  );
};

const RapierTutorial_1 = () => {
  return (
    <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
      <OrbitControls />
      <Physics>
        <MainComponent />
      </Physics>
    </Canvas>
  );
};

export default RapierTutorial_1;
