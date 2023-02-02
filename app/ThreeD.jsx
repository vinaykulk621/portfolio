"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// import { GUI } from "dat.gui";

const ThreeD = () => {
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );
  const rendererRef = useRef(new THREE.WebGLRenderer());
  // const guiRef = useRef();

  useEffect(() => {
    // Necessary stuff
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    // GUI
    // guiRef.current = new GUI();
    // const cameraFolder = guiRef.current.addFolder("Camera");
    // cameraFolder.add(camera.position, "x", -10, 10).step(0.1);
    // cameraFolder.add(camera.position, "y", -10, 10).step(0.1);
    // cameraFolder.add(camera.position, "z", -10, 10).step(0.1);
    // cameraFolder.open();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const texture = new THREE.TextureLoader().load(
      "https://unpkg.com/three-globe@2.24.13/example/img/earth-night.jpg"
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.set(2, 0, 0);

    // SPHERE Position
    scene.add(sphere);
    camera.position.x = 10;
    camera.position.z = 9;

    renderer.setClearColor(0x000b1a, 1);

    // random stars
    function addStars() {
      const geometry = new THREE.SphereGeometry(0.3);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(700));
      sphere.position.set(x, y, z);
      scene.add(sphere);
    }
    // filling the screen with the stars
    Array(800).fill().forEach(addStars);

    const animate = () => {
      requestAnimationFrame(animate);

      // SPHERE Rotation
      sphere.rotation.x += 0.001;
      sphere.rotation.z += 0.001;

      //  Rotating the camera around the sphere
      camera.lookAt(sphere.position);
      camera.position.x = 5 * Math.sin(Date.now() * 0.0001);
      camera.position.z = 5 * Math.cos(Date.now() * 0.0001);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return <div />;
};

export default ThreeD;

// Diferent textures For the Sphere
// const texture = new THREE.TextureLoader().load(
//   "https://unpkg.com/three-globe@2.24.13/example/img/earth-topology.png"
// );
// const texture = new THREE.TextureLoader().load(
//   "https://unpkg.com/three-globe@2.24.13/example/img/earth-dark.jpg"
// );
// const texture = new THREE.TextureLoader().load(
//   "https://unpkg.com/three-globe@2.24.13/example/img/earth-water.png"
// );
// const texture = new THREE.TextureLoader().load(
//   "https://unpkg.com/three-globe@2.24.13/example/img/earth-blue-marble.jpg"
// );
