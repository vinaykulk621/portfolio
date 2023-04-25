---
title: 'Getting started with Three-js in Next-js 13'
subtitle: 'HOw to get started with Three-js in Next-js 13 app-dir'
date: '25-04-2023'
---

## Hello There🐼

Let's make a cool 3D webpage using Three-js in Next.js 13.

____


start of with creating a new `Next-js` project with app-dir.

```shell
npx create-next-app@latest
```

Install `three-js`.

```shell
npm i three
```

here i am using JS, tailwindCSS and `Next-js 13.2` with app-directory.


---

### Next steps

1. Navigate to `/app/page.js` and clean up the starter code.
2. Make a file `Three.js` in `/app` directory (`/app/Three.js`).
3. In `Three.js` component where we will be writing our three-js code.

populate `/app/Three.js` with the following code.


`/app/Three.js`

```js
export default function Three (){
    return <>Three-js code goes here</>
}
```

go ahead and import this component in your `/app/page.js` file. Now your `/app/page.js` should look like this.

```js
import Three from './Three'

export default function Home(){
  return <Three />
}
```

---

### Next-steps

1. Creating a scene in Three-js.
2. Adding some 3D geometry to the webpage.

you can think of your 3D scene as a movie shooting session where you are required to have a camera, a scene and film in the camera to capture the movie. Similarly here in Three-js you need a `camera`, `scene` and `renderer`. We need to create these things before doing anything in three-js.

populate `/app/Three.js` page with the following code that sets up our scene in three-js.

```js

'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Three (){
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