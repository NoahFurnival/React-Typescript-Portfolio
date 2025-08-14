import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import earthGLB from "@/assets/earth.glb";

type EarthProps = {
  scrollPercent: number;
};

const EarthLoader = ({ scrollPercent }: EarthProps) => {
  const earthRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(earthGLB) as GLTF;

  useFrame(({camera} ) => {
    if (!earthRef.current) return;

    earthRef.current.rotation.y += 0.0015;
    camera.position.y = 0.07 + (0 - 0.07) * scrollPercent;
    camera.position.z = 1 + (5 - 1) * scrollPercent;
    camera.updateProjectionMatrix();
    earthRef.current.visible = scrollPercent < 1;
  });

  return <primitive ref={earthRef} object={gltf.scene} />;
};

export default EarthLoader;
