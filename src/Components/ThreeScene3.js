import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import bg from "../assets/startsbackground.jpg";
import flower from "../assets/flowers.jpg";

export default function ThreeScene3() {
  useEffect(() => {
    // todo : scene
    const scene = new THREE.Scene();

    // todo : texture
    const textureloader = new THREE.TextureLoader();
    scene.background = textureloader.load(bg);

    const geometry = new THREE.SphereGeometry(3, 60, 60);
    const material = new THREE.MeshStandardMaterial({
      color: "#00ff83",
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    // todo 2nd geometry
    const geometry2 = new THREE.BoxGeometry(4, 4, 4);
    const material2 = new THREE.MeshBasicMaterial({
      //   color: "#00ff00",
      map: textureloader.load(flower),
    });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(5, 5, 0);
    scene.add(mesh2);

    // todo : plain geometry
    const planeGeometry = new THREE.PlaneGeometry(20, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);

    // todo : grid helper
    const gridhelper = new THREE.GridHelper(15);
    scene.add(gridhelper);

    // todo : light
    const light = new THREE.SpotLight(0xffffff, 1000);
    light.position.set(10, 10, 10);
    scene.add(light);

    const lighthelper = new THREE.SpotLightHelper(light);
    scene.add(lighthelper);

    // todo : camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 20;
    scene.add(camera); // Add camera to the scene

    // todo axeshelper
    const axisHelper = new THREE.AxesHelper(5);
    scene.add(axisHelper);

    // todo : render
    const canvas = document.querySelector(".webgl3");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // todo : orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Enable damping for smoother controls
    controls.enablePan = false; //unable moving the object
    controls.enableZoom = true; // zoom function will  be off
    // controls.autoRotate = true; //it  will rotate automatically
    // controls.autoRotateSpeed = 5;

    // render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      // Render scene with camera
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas className="webgl3" />;
}
