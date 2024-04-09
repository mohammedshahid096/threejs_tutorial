import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import starsTexture from "../assets/stars.jpg";
import sunTexture from "../assets/sun.jpg";
import mercuryTexture from "../assets/mercury.jpg";
import venusTexture from "../assets/venus.jpg";
import earthTexture from "../assets/earth.jpg";
import marsTexture from "../assets/mars.jpg";
import jupiterTexture from "../assets/jupiter.jpg";
import saturnTexture from "../assets/saturn.jpg";
import saturnRingTexture from "../assets/saturn ring.png";
import uranusTexture from "../assets/uranus.jpg";
import uranusRingTexture from "../assets/uranus ring.png";
import neptuneTexture from "../assets/neptune.jpg";
import plutoTexture from "../assets/pluto.jpg";

const SolarSystem = () => {
  useEffect(() => {
    // todo : scene
    const scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
    ]);

    const textureLoader = new THREE.TextureLoader();

    const sunGeo = new THREE.SphereGeometry(16, 30, 30);
    const sunMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(sunTexture),
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    function createPlanete(size, texture, position, ring) {
      const geo = new THREE.SphereGeometry(size, 30, 30);
      const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
      });
      const mesh = new THREE.Mesh(geo, mat);
      const obj = new THREE.Object3D();
      obj.add(mesh);
      if (ring) {
        const ringGeo = new THREE.RingGeometry(
          ring.innerRadius,
          ring.outerRadius,
          32
        );
        const ringMat = new THREE.MeshBasicMaterial({
          map: textureLoader.load(ring.texture),
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
      }
      scene.add(obj);
      mesh.position.x = position;
      return { mesh, obj };
    }

    const mercury = createPlanete(3.2, mercuryTexture, 28);
    const venus = createPlanete(5.8, venusTexture, 44);
    const earth = createPlanete(6, earthTexture, 62);
    const mars = createPlanete(4, marsTexture, 78);
    const jupiter = createPlanete(12, jupiterTexture, 100);
    const saturn = createPlanete(10, saturnTexture, 138, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingTexture,
    });
    const uranus = createPlanete(7, uranusTexture, 176, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingTexture,
    });
    const neptune = createPlanete(7, neptuneTexture, 200);
    const pluto = createPlanete(2.8, plutoTexture, 216);

    const pointLight = new THREE.PointLight(0xffffff, 2, 300);
    scene.add(pointLight);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(-90, 140, 140);

    // todo : render
    const canvas = document.querySelector(".solar");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // todo : orbit control
    const controls = new OrbitControls(camera, canvas);
    // controls.enableZoom = ;

    // render loop
    const animate = () => {
      requestAnimationFrame(animate);
      //Self-rotation
      sun.rotateY(0.004);
      mercury.mesh.rotateY(0.004);
      venus.mesh.rotateY(0.002);
      earth.mesh.rotateY(0.02);
      mars.mesh.rotateY(0.018);
      jupiter.mesh.rotateY(0.04);
      saturn.mesh.rotateY(0.038);
      uranus.mesh.rotateY(0.03);
      neptune.mesh.rotateY(0.032);
      pluto.mesh.rotateY(0.008);

      //Around-sun-rotation
      mercury.obj.rotateY(0.04);
      venus.obj.rotateY(0.015);
      earth.obj.rotateY(0.01);
      mars.obj.rotateY(0.008);
      jupiter.obj.rotateY(0.002);
      saturn.obj.rotateY(0.0009);
      uranus.obj.rotateY(0.0004);
      neptune.obj.rotateY(0.0001);
      pluto.obj.rotateY(0.00007);

      // Update controls
      controls.update();

      // Render scene with camera
      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return <canvas className="solar"></canvas>;
};

export default SolarSystem;
