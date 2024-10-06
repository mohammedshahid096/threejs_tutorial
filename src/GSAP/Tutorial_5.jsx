import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tutorial_5 = () => {
  useGSAP(() => {
    gsap.from("#box1", {
      scale: 0,
      delay: 2,
      duration: 2,
      rotate: 360,
    });

    gsap.from("#box2", {
      scale: 0,
      duration: 2,
      rotate: 360,
      x: 100,
      scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        // markers: false,
        // start: "top 60%",
        // end: "top 30%",
        scrub: 2,
      },
    });
    gsap.from("#box3", {
      x: 500,
      duration: 4,
      scrollTrigger: {
        trigger: "h1",
        scroller: "body",
        // markers: true,
        // start: "top 60%",
        // end: "top 30%",
        // scrub
      },
    });
    gsap.to("#box4", {
      transform: "translateX(-200%)",
      scrollTrigger: {
        trigger: "#boxparent",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 2,
      },
    });
  });
  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">
        Tutorial-5 (Scroll Tigger)
      </h1>
      <div className=" w-screen h-screen flex justify-center items-center bg-slate-700 ">
        <div className="w-40 h-40 bg-purple-600" id="box1"></div>
      </div>
      <div className="w-screen flex justify-center items-center h-screen bg-purple-300">
        <div className="w-40 h-40 bg-purple-600" id="box2"></div>
      </div>
      <div className="w-screen flex justify-center items-center h-screen bg-green-400 ">
        <h1 className=" text-6xl font-bold bg-yellow-400" id="box3">
          Helloo shhaid
        </h1>
      </div>
      <div
        className="w-screen flex justify-center items-center h-screen bg-yellow-400  "
        id="boxparent"
      >
        <h1
          className=" text-[300px] font-bold text-black ml-5 uppercase"
          id="box4"
        >
          Experience
        </h1>
      </div>
    </div>
  );
};

export default Tutorial_5;
