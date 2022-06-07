import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const model = useLoader(GLTFLoader, "/boschbetonV101.glb");
  // console.log('model: ',model);
  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} />
    </Suspense>
  );
};

export default Model;
