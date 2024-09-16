import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const BoxGeometry = ({ position, color, size, mathFun }) => {
  const ref = useRef();

  useFrame((state, delta, xrFrame) => {
    // console.log(state);
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.2;
    ref.current.position.z = mathFun(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const ThreeTutorial_2 = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <BoxGeometry position={[1, 0, 0]} color={"orange"} mathFun={Math.sin} />
      <BoxGeometry position={[-1, 0, 0]} color={"blue"} mathFun={Math.cos} />
      <BoxGeometry position={[1, 2, 0]} color={"green"} mathFun={Math.tan} />
      {/* <BoxGeometry position={[-1, 2, 0]} color={"purple"} mathFun={Math.sinh} /> */}
    </Canvas>
  );
};

export default ThreeTutorial_2;
