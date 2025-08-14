import "./EarthScene.scss";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import EarthLoader from "./EarthLoader";
import Stars from "./Stars";

const EarthScene = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const percent = Math.min(window.scrollY / window.innerHeight, 1);
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="canvas">
		<Canvas camera={{ position: [0, 0, 1], fov: 6 }} gl={{alpha: true}}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <Stars />
        <EarthLoader scrollPercent={scrollPercent} />
      </Canvas>
    </div>
  );
};

export default EarthScene;
