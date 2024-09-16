import { Box, Sphere, Torus, OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { Physics, quat, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";

const MainComponent = () => {
  const [hover, sethover] = useState(false);
  const cubeRef = useRef();
  const kickerRef = useRef();

  const jumpFunction = () => {
    cubeRef.current.applyImpulse({ x: 0, y: 5, z: 0 });
  };

  useFrame((state, delta) => {
    const curRotation = quat(kickerRef.current.rotation());
    const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      delta * 2
    );
    curRotation.multiply(incrementRotation);
    kickerRef.current.setNextKinematicRotation(curRotation);
    // console.log(curRotation);
  });
  return (
    <>
      {/* Setup lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />

      <RigidBody position={[-2.5, 1, 0]} ref={cubeRef}>
        <Box
          onPointerEnter={() => sethover(true)}
          onPointerLeave={() => sethover(false)}
          onClick={jumpFunction}
        >
          <meshStandardMaterial color={hover ? "hotpink" : "royalblue"} />
        </Box>
      </RigidBody>

      <RigidBody
        type="kinematicPosition"
        position={[0, 0.75, 0]}
        ref={kickerRef}
      >
        <group position={[2.5, 0, 0]}>
          <Box args={[5, 0.5, 0.5]}>
            <meshStandardMaterial color={"purple"} />
          </Box>
        </group>
      </RigidBody>

      <RigidBody type="fixed" friction={2}>
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};

const RapierTutorial_5 = () => {
  return (
    <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
      <OrbitControls />
      <Physics>
        <MainComponent />
      </Physics>
    </Canvas>
  );
};

export default RapierTutorial_5;
