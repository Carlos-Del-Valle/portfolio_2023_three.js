import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

//const Computers = (isMobile) => {
const Computers = () => {
  const computer = useGLTF("./test2/test222.glb");
  const { viewport } = useThree();

  return (
    <mesh>
      <spotLight
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
        scale={viewport.height / 2}
        position={[0.0, 1.0, 0]}
        rotation={[0, 0.4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCanvasStyles = () => {
    let styles = {
      position: "absolute",
      maxWidth: "80em",
      maxHeight: "30em",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -30%)",
    };

    if (windowHeight <= 671) {
      let tweakShortDevices = (windowHeight * 7) / 500;
      console.log(tweakShortDevices);
      styles.transform = `translate(-50%, ${tweakShortDevices}%)`;
    }

    //Canvas media queries' conditional tree
    //Mobile S
    if ((windowWidth >= 320 && windowWidth < 375) || windowWidth < 320) {
      styles.maxWidth = "60em";
      styles.maxHeight = "10em";
      // if (windowHeight <= 739) {
      //   styles.display = "none";
      // }
    }
    //Mobile M
    else if (windowWidth >= 375 && windowWidth < 425) {
      styles.maxWidth = "60em";
      styles.maxHeight = "12em";
      // if (windowHeight <= 505) {
      //   styles.display = "none";
      // }
    }
    //Mobile L
    else if (windowWidth >= 425 && windowWidth < 768) {
      styles.maxWidth = "60em";
      styles.maxHeight = "21em";
      // if (windowHeight <= 672) {
      //   styles.display = "none";
      // }
    }
    //Tablet
    else if (windowWidth >= 768 && windowWidth < 1024) {
      styles.maxWidth = "70em";
      styles.maxHeight = "28em";
      // if (windowHeight <= 866) {
      //   styles.display = "none";
      // }
    }
    //Laptop
    else if (windowWidth >= 1024 && windowWidth < 1440) {
      styles.maxWidth = "80em";
      styles.maxHeight = "37em";
      // if (windowHeight <= 955) {
      //   styles.display = "none";
      // }
    }
    //Laptop L
    else if (windowWidth >= 1440 && windowWidth < 2560) {
      styles.maxWidth = "90em";
      styles.maxHeight = "42em";
      // if (windowHeight <= 990) {
      //   styles.display = "none";
      // }
    }
    //4K
    else if (windowWidth >= 2560) {
      styles.maxWidth = "100em";
      styles.maxHeight = "45em";
      // if (windowHeight <= 1042) {
      //   styles.display = "none";
      // }
    }

    return styles;
  };

  return (
    <Canvas
      style={getCanvasStyles()}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
