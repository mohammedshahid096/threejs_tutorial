import React from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Experiment1 = () => {
  return (
    <>
      {/* Ground */}
      <RigidBody type="fixed">
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>

      {/* Falling boxes */}
      <RigidBody>
        <mesh position={[-2, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>

      <RigidBody>
        <mesh position={[0, 7, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </RigidBody>

      <RigidBody>
        <mesh position={[2, 10, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
    </>
  );
};

const Experiment2 = () => {
  return (
    <>
      {/* Ground */}
      {/* <RigidBody type="fixed">
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody> */}

      <RigidBody restitution={0.1}>
        <mesh position={[-2, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </RigidBody>

      <RigidBody restitution={0.8}>
        <mesh position={[0, 7, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="brown" />
        </mesh>
      </RigidBody>

      <RigidBody restitution={1}>
        <mesh position={[2, 10, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </RigidBody>
    </>
  );
};

const Experiment3 = () => {
  return (
    <>
      <RigidBody gravityScale={0}>
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
      </RigidBody>
    </>
  );
};

const Experiment4 = () => {
  return (
    <RigidBody>
      <mesh position={[0, 10, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </RigidBody>
  );
};

const MainComponent = () => {
  return (
    <>
      {/* Setup lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Experiment1 />
      <Experiment2 />
      <Experiment3 />
      <Experiment4 />
    </>
  );
};

const RapierTutorial_2 = () => {
  return (
    <div className="bg-black h-full">
      <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
        <OrbitControls />
        <Physics>
          <MainComponent />
        </Physics>
      </Canvas>
    </div>
  );
};

export default RapierTutorial_2;
