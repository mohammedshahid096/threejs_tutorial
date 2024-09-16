import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Tutorial_1 = () => {
  const box3Ref = useRef(null);

  useGSAP(() => {
    // * Moves an element from its current position to the target values
    // * it is with classbased animation
    gsap.to(".box1", {
      duration: 2,
      x: 1000,
      delay: 1,
    });

    // * Animates an element from a specific starting point to its natural position.
    // * it is with the id
    gsap.from("#box2", {
      duration: 2,
      x: 1000,
      delay: 1,
    });

    // * Specifies both the starting and ending values explicitly.
    // * it is with the Ref Value
    // * here fromTo need to values 1 from value , 2 will be to value
    gsap.fromTo(
      box3Ref.current,
      { x: 0, opacity: 1 },
      { duration: 1, x: 1000, opacity: 1, rotate: 360 }
    );
  });

  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">
        Tutorial-1 (to,from,fromTo)
      </h1>
      <h2 className="text-xl">to property : by class</h2>
      <div className="h-52 w-52 bg-slate-700 box1"></div>
      <h2 className="text-xl">from property : by id</h2>
      <div className="h-52 w-52 bg-slate-900" id="box2"></div>
      <h2 className="text-xl">fromTo : by Ref.current</h2>
      <div className="h-52 w-52 bg-green-400" ref={box3Ref}></div>
    </div>
  );
};

export default Tutorial_1;
