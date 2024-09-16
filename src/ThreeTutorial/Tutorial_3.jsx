import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";

const SphereGeometry = ({ position, color, size, mathFun }) => {
  const ref = useRef();

  useFrame((state, delta, xrFrame) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime);
  });

  return (
    <mesh position={position} ref={ref} scale={1.5}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const MainComponent = () => {
  const directionLightRef = useRef();

  useHelper(directionLightRef, DirectionalLightHelper, 0.5, "white");
  const { color } = useControls({ color: "green" });
  return (
    <>
      <directionalLight
        position={[1, 2, 2]}
        intensity={0.5}
        ref={directionLightRef}
        color={color}
      />
      <ambientLight intensity={0.1} />

      <SphereGeometry />
    </>
  );
};

const ThreeTutorial_3 = () => {
  return (
    <Canvas>
      <MainComponent />
    </Canvas>
  );
};

export default ThreeTutorial_3;
