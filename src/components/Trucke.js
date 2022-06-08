import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/** Trucke component */
const Trucke = () => {
  const model = useLoader(GLTFLoader, "/track.glb");

  return (
    <primitive
      object={model.scene}
      scale={[0.2, 0.2, 0.2]}
      rotation={[0, -Math.PI / 2, 0]}
      position={[-1.83, 0, 0.11]}
      castShadow
      receiveShadow
    />
  );
};

export default Trucke;
