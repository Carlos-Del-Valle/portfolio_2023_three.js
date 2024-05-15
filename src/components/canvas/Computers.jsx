import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = (isMobile) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  //const computer = useGLTF("./loomis/scene.gltf");
  //const computer = useGLTF("./test_head_compressed/test_head_compressed.gltf");
  //const computer = useGLTF("./test1/compressed.glb");
  const computer = useGLTF("./test2/test222.glb");
  return (
    <mesh>
      <spotLight
        //position={[-20, 70, 10]}
        position={[-20, 70, 60]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        //scale={isMobile ? 0.7 : 0.75}
        scale={isMobile ? 4.0 : 4.75}
        //position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        position={isMobile ? [0.0, 0, 0] : [0, -3.25, -1.5]}
        //rotation={[-0.01, -0.2, -0.1]}
        rotation={[0, 0.4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Screen Size listener
    const mediaQuery = window.matchMedia("(max-width:500px)");
    // Setting the initial valua of 'isMobile' state
    setIsMobile(mediaQuery.matches);
    // Callback function handling media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Callback function as a listnener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Removing listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
