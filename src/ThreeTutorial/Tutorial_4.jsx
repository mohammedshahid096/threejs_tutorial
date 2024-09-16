import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useHelper, useTexture } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";
import * as THREE from "three";

const MainComponent = () => {
  const t1 = useTexture("/image1.png");

  const [t2, t3] = useTexture([
    "/collection1/image1.jpg",
    "/collection1/image2.jpg",
  ]);
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <>
      <directionalLight position={[1, 2, 2]} intensity={0.5} />
      <ambientLight />

      <mesh ref={ref} rotation={[0, 1.4, 0.5]}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial color={""} side={THREE.DoubleSide} map={t1} />
      </mesh>

      <mesh position={[0, 0, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={""} map={t2} />
        <meshStandardMaterial color={""} map={t3} />
      </mesh>
    </>
  );
};

const ThreeTutorial_4 = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <MainComponent />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeTutorial_4;
