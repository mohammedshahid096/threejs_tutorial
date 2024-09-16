import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

// * Stagger is useful for animating multiple elements with a delay between each
const Tutorial_2 = () => {
  useGSAP(() => {
    gsap.from(".animation_1", {
      y: -400,
      duration: 1.5,
      stagger: 0.9,
    });
  });

  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">Tutorial-2 (Stagger)</h1>
      <div className="flex gap-4">
        <div className="h-32 w-32 bg-slate-700 animation_1"></div>
        <div className="h-32 w-32 bg-purple-300 animation_1"></div>
        <div className="h-32 w-32 bg-green-400 animation_1"></div>
        <div className="h-32 w-32 bg-slate-800 animation_1"></div>
        <div className="h-32 w-32 bg-purple-400 animation_1"></div>
        <div className="h-32 w-32 bg-green-500 animation_1"></div>
      </div>
    </div>
  );
};

export default Tutorial_2;
