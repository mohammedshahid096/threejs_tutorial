import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

export default function ThreeScene2() {
  useEffect(() => {
    // todo : scene
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(3, 60, 60);
    const material = new THREE.MeshBasicMaterial({
      color: "#00ff83",
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

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
    const canvas = document.querySelector(".webgl2");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // todo : orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Enable damping for smoother controls
    controls.enablePan = false; //unable moving the object
    controls.enableZoom = true; // zoom function will  be off
    // controls.autoRotate = true; //it  will rotate automatically
    // controls.autoRotateSpeed = 5;

    const gui = new dat.GUI();
    const options = {
      sphereColor: "#ffea00",
      wireframe: true,
    };
    gui
      .addColor(options, "sphereColor")
      .onChange((e) => mesh.material.color.set(e));
    gui
      .add(options, "wireframe")
      .onChange((e) => (mesh.material.wireframe = e));

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

  return <canvas className="webgl2" />;
}