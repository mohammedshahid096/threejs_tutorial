import Tutorial_1 from "./GSAP/Tutorial_1";
import Tutorial_2 from "./GSAP/Tutorial_2";
import Tutorial_3 from "./GSAP/Tutorial_3";
import Tutorial_4 from "./GSAP/Tutorial_4";
import Home from "./Home";
import RapierTutorial_1 from "./RAPIER/Tutorial_1";
import RapierTutorial_2 from "./RAPIER/Tutorial_2";
import RapierTutorial_3 from "./RAPIER/Tutorial_3";
import RapierTutorial_4 from "./RAPIER/Tutorial_4";
import RapierTutorial_5 from "./RAPIER/Tutorial_5";
import ThreeTutorial_1 from "./ThreeTutorial/Tutorial_1";
import ThreeTutorial_2 from "./ThreeTutorial/Tutorial_2";
import ThreeTutorial_3 from "./ThreeTutorial/Tutorial_3";
import ThreeTutorial_4 from "./ThreeTutorial/Tutorial_4";

const routes = [
  { route: "/", element: Home },

  //   gsap
  {
    route: "/gsap/tutorial_1",
    element: Tutorial_1,
    category: "GSAP",
    componet: "Tutorial_1",
  },
  {
    route: "/gsap/tutorial_2",
    element: Tutorial_2,
    category: "GSAP",
    componet: "Tutorial_2",
  },
  {
    route: "/gsap/tutorial_3",
    element: Tutorial_3,
    category: "GSAP",
    componet: "Tutorial_3",
  },
  {
    route: "/gsap/tutorial_4",
    element: Tutorial_4,
    category: "GSAP",
    componet: "Tutorial_4",
  },

  //   three
  {
    route: "/three/tutorial_1",
    element: ThreeTutorial_1,
    category: "THREE",
    componet: "ThreeTutorial_1",
  },
  {
    route: "/three/tutorial_2",
    element: ThreeTutorial_2,
    category: "THREE",
    componet: "ThreeTutorial_2",
  },
  {
    route: "/three/tutorial_3",
    element: ThreeTutorial_3,
    category: "THREE",
    componet: "ThreeTutorial_3",
  },
  {
    route: "/three/tutorial_4",
    element: ThreeTutorial_4,
    category: "THREE",
    componet: "ThreeTutorial_4",
  },

  //   Rapier physics
  {
    route: "/rapier/tutorial_1",
    element: RapierTutorial_1,
    category: "RAPIER",
    componet: "RapierTutorial_1",
  },
  {
    route: "/rapier/tutorial_2",
    element: RapierTutorial_2,
    category: "RAPIER",
    componet: "RapierTutorial_2",
  },
  {
    route: "/rapier/tutorial_3",
    element: RapierTutorial_3,
    category: "RAPIER",
    componet: "RapierTutorial_3",
  },
  {
    route: "/rapier/tutorial_4",
    element: RapierTutorial_4,
    category: "RAPIER",
    componet: "RapierTutorial_4",
  },
  {
    route: "/rapier/tutorial_5",
    element: RapierTutorial_5,
    category: "RAPIER",
    componet: "RapierTutorial_5",
  },
];

export default routes;
