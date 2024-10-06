import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tutorial_4 = () => {
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(".box1", { x: 1000, duration: 1 });
    t1.from(".box2", { x: 100, duration: 1, rotate: 360 });
    t1.from(".box3", { x: 1000, duration: 1, ease: "power", rotate: 360 });
  });
  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">Tutorial-4 (Timeline)</h1>
      <div className="h-32 w-32 bg-slate-700 box1"></div>
      <div className="h-32 w-32 bg-purple-300  box2"></div>
      <div className="h-32 w-32 bg-green-400 box3"></div>
    </div>
  );
};

export default Tutorial_4;
