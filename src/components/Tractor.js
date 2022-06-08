import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/** Tractor component */
function Tractor() {
  const model = useLoader(GLTFLoader, "/tractor.glb");

  return (
    <primitive
      object={model.scene}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0, -Math.PI, 0]}
      position={[-1.83, 0, 0.11]}
      castShadow
      receiveShadow
    />
  );
}

export default Tractor;
