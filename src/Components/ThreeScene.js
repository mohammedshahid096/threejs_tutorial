import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeScene() {
  useEffect(() => {
    // todo : scene
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(3, 60, 60);
    const material = new THREE.MeshStandardMaterial({
      color: "#00ff83",
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // todo : light
    const light = new THREE.PointLight(0xffffff, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

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
    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // todo : orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Enable damping for smoother controls
    controls.enablePan = false; //unable moving the object
    controls.enableZoom = false; // zoom function will  be off
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

  return <canvas className="webgl" />;
}
