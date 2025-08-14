import { useRef, useEffect } from "react";
import * as THREE from "three";
import starTexture from "@/assets/star.png";

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const starCount = 20000;
    const positions: number[] = [];
    for (let i = 0; i < starCount; i++) {
      positions.push((Math.random() - 0.5) * 10); // x
      positions.push((Math.random() - 0.5) * 10); // y
      positions.push(-Math.random() * 5 - 1);     // z
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const texture = new THREE.TextureLoader().load(starTexture);
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      sizeAttenuation: true,
      map: texture,
      transparent: true,
      depthWrite: false,
    });

    if (pointsRef.current) {
      pointsRef.current.geometry = geometry;
      pointsRef.current.material = material;
    }
  }, []);

  return <points ref={pointsRef} />;
};export default Stars;
