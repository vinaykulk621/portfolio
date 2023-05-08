---
title: 'Getting started with Three-js in Next-js 13'
subtitle: 'How to get started with Three-js in Next-js 13 app-dir'
date: 'April 26, 2023'
author: 'Vinay Kulkarni'
---

### Hello There🐼

Let's make a cool 3D webpage using Three-js in Next.js 13.

---

Start of with creating a new `Next-js` project with app-dir and install three-js.
Here i am using JS, tailwindCSS and `Next-js 13.2` with app-directory.

```shell
npx create-next-app@latest
npm i three
```

---

### Next steps

1. Navigate to `/app/page.js` and clean up the starter code.
2. Make a `Three.js` component file in `/app` directory (`/app/Three.js`).
3. `Three.js` is the file where we will be writing our three-js code.

populate `/app/Three.js` with the following starter code.

```js
export default function Three() {
  return <>Three-js code goes here</>
}
```

go ahead and import this component. Now your `/app/page.js` should look like this.

```js
import Three from './Three'

export default function Home() {
  return <Three />
}
```

**Note**:
In the next steps you will editing `/app/Three.js` file only.

---

### Next-steps

1. Creating a scene in Three-js.
2. Adding some 3D geometry to the webpage.

You can think of your 3D scene as a movie shooting session where you are required to have a camera, a scene and film in the camera to capture the movie. Similarly here in Three-js you need a `camera`, `scene` and `renderer`. We need to create these things before doing anything in three-js.

populate `/app/Three.js` page with the following code that sets up our scene in three-js.

```js
'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Three() {
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
  return <>Three-js cool.</>
}
```

---

#### Next-steps

1. Using the scene that was created to render something in the screen.
2. Making a SphereGeometry.
3. Putting the SphereGeometry on the page.

In the following code block you are rendering the your 3D geometry as soon as you load the hoe page. This is achieved by an `useEffect()` call.In this call you are setting the renderer's size viz, `window.size` and pushing the 3D object to the end of the page.

```js
'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Three() {
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

  // New Code Here
  useEffect(() => {
    const scene = sceneRef.current
    const camera = cameraRef.current
    const renderer = rendererRef.current

    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.after(renderer.domElement)
  }, [])
  return <></>
}
```

Making the SphereGeometry

The simplest geometry in three-js is a **ball** i.e; [SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry).

Sphere geometry takes a bunch of parameters in it's constructor while creating it. Explore around the documentation from [three.js](https://threejs.org/docs/#manual/en/introduction/Installation) website and numbers to figure out what they mean and how you can customize your **Ball**.

The following code creates a **Ball** and adds it to the scene.

```js
const geometry = new THREE.SphereGeometry(15, 32, 16)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)
```

Now for the final step you can copy the following code block to your `/api/Three.js` file and do `npm run dev`.

```js
'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Three() {
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

    // New Code Here
    const geometry = new THREE.SphereGeometry(15, 32, 16)
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const ball = new THREE.Mesh(geometry, material)
    scene.add(ball)

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <></>
}
```

And That's It Folk now you have a **ball** on your screen.

---

**Fun-Note**

> you can wrap your **ball** with any picture to make it look cool or like a planet or a star or anything that comes to your imagination. Let's make a **moon** 🌚,
> you can get the 🌚 `jpg` from [here](tinyurl.com/spj4rujm).

```js
'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Three() {
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

    // New Code Here
    const moonImg = 'tinyurl.com/spj4rujm'

    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(10, 150, 20),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(moonImg),
      })
    )

    scene.add(ball)

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotating the Moon around it's own axis
      ball.rotation.x += 0.01

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <></>
}
```

That's it For Now folks. Maybe in the near future i might release a npx command like `npx create-next-three` kind of command which will directly initialize a working project.
