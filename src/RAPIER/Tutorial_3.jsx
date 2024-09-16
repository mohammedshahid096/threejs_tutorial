import { Box, Sphere, Torus, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";

const MainComponent = () => {
  return (
    <>
      {/* Setup lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />

      <RigidBody position={[0, 6, 0]} colliders="ball">
        <Sphere>
          <meshStandardMaterial color="hotpink" />
        </Sphere>
      </RigidBody>

      <RigidBody position={[3, 5, 0]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>

      <RigidBody position={[-4, 5, 0]} colliders="trimesh">
        <Torus>
          <meshStandardMaterial color="orange" />
        </Torus>
      </RigidBody>

      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="green" />
        </Box>
      </RigidBody>
    </>
  );
};

const RapierTutorial_3 = () => {
  return (
    <Canvas camera={{ position: [0, 30, 30], fov: 20 }}>
      <OrbitControls />
      <Physics>
        <MainComponent />
      </Physics>
    </Canvas>
  );
};

export default RapierTutorial_3;
