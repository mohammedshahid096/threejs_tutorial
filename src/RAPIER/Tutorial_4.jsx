import React, { useRef } from "react";
import { Physics, RigidBody, useRevoluteJoint } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MainComponent = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();

  // Set up the revolute joint between box1 and box2
  useRevoluteJoint(box1Ref, box2Ref, [
    [0, 1, 0], // Pivot point relative to the first body
    [0, -1, 0], // Pivot point relative to the second body
    [0, 1, 0], // Axis of rotation (y-axis here)
  ]);
  return (
    <>
      {/* Setup lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Static Ground */}
      <RigidBody type="fixed">
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>

      <RigidBody ref={box1Ref}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>

      {/* Box 2: Connected to Box 1 with a revolute joint */}
      <RigidBody ref={box2Ref}>
        <mesh position={[0, 7, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </RigidBody>
    </>
  );
};

const RapierTutorial_4 = () => {
  return (
    <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
      <OrbitControls />
      <Physics>
        <MainComponent />
      </Physics>
    </Canvas>
  );
};

export default RapierTutorial_4;
