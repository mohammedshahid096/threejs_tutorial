import React, { useRef } from "react";
import { pages } from "./Ux";
import { BoxGeometry } from "three";
const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2
);

const Page = ({ front, back, ...props }) => {
  const groupRef = useRef();
  return (
    <group {...props} ref={groupRef}>
      <mesh scale={0.1}>
        {/* <boxGeometry /> */}

        <primitive object={pageGeometry} attach={"geometry"} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </group>
  );
};

const Book = ({ ...props }) => {
  return (
    <group {...props}>
      {[...pages].map((pageData, index) => (
        <Page
          position-x={index * 0.15}
          key={index}
          {...pageData}
          index={index}
        />
      ))}
    </group>
  );
};

export default Book;
