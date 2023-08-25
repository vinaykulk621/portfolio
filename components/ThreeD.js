'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main() {
    vertexUV=uv;
    vertexNormal=normalize(normalMatrix*normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `
const atmosphereVertexShader = `
  varying vec3 vertexNormal;
  void main() {
    vertexNormal=normalize(normalMatrix*normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.9);
  }
  `
const fragmentShader = `
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){
    float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));
    vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);
    gl_FragColor = vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);
  }
`
const atmosphereFragmentShader = `
  varying vec3 vertexNormal;
  void main(){
    float intensity=pow(0.4-dot(vertexNormal,vec3(0,0,1.0)),2.0);
    gl_FragColor = vec4(0.3,0.6,1.0,1.0)*intensity;
  }
`
const ThreeD = () => {
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    sceneRef.current = new THREE.Scene()
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true })
  }, [])

  useEffect(() => {
    const scene = sceneRef.current
    const camera = cameraRef.current
    const renderer = rendererRef.current

    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.after(renderer.domElement)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 250, 250),
      new ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load('/globe/earth-night.jpg'),
          },
        },
      })
    )
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 250, 250),
      new ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    )

    atmosphere.scale.set(1.12, 1.12, 1.12)

    scene.add(sphere)
    scene.add(atmosphere)
    camera.position.z = 7

    renderer.setClearColor(0x000000, 1)

    const animate = () => {
      requestAnimationFrame(animate)

      // SPHERE Rotation
      sphere.rotation.x += 0.01
      sphere.rotation.z += 0.01
      sphere.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <></>
}

export default ThreeD
