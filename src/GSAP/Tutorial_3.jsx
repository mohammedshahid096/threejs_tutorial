import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

// repeat: -1: Infinite repeats.
// repeat: n: Repeats the animation n times.
// yoyo: true: Reverses the animation on each repeat.
// repeatDelay: n: Adds a delay between repeats.

const Tutorial_3 = () => {
  useGSAP(() => {
    // * only once as gsap render animation default
    gsap.from(".animation_1", {
      y: -400,
      duration: 1.5,
      repeat: 0,
    });

    // * 2 times animation
    // * one default + 1 repeat
    gsap.from(".animation_2", {
      y: -400,
      duration: 1.5,
      repeat: 1,
    });

    // * 3 times animation
    // * one default + 2 repeat
    gsap.from(".animation_3", {
      y: -400,
      duration: 1.5,
      repeat: 2,
    });

    // * infinite times animation
    // * one default + infinite
    gsap.from(".animation_4", {
      y: -400,
      duration: 1.5,
      repeat: -1,
    });

    // * infinite times animation
    // * one default + infinite
    // * yoyo alternative animation
    gsap.from(".animation_5", {
      y: -400,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });

    // * infinite times animation
    // * one default + infinite
    // * yoyo alternative animation
    // * repeat delay time
    gsap.from(".animation_6", {
      y: -400,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });
  });

  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">
        Tutorial-3 (Repeat,YoYo,repeatDelay)
      </h1>
      <div className="flex gap-4">
        <div className="h-32 w-32 bg-slate-700 animation_1"></div>
        <div className="h-32 w-32 bg-purple-300  animation_2"></div>
        <div className="h-32 w-32 bg-green-400 animation_3"></div>
        <div className="h-32 w-32 bg-slate-800 animation_4"></div>
        <div className="h-32 w-32 bg-purple-400 animation_5"></div>
        <div className="h-32 w-32 bg-green-500 animation_6"></div>
      </div>
    </div>
  );
};

export default Tutorial_3;
