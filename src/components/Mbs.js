import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Mbs() {
  const model = useLoader(GLTFLoader, "/mbs Beton.glb");
  // console.log(model.scene);
  return <primitive object={model.scene} />;
}

export default Mbs;
