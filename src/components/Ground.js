import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  const [ref] = usePlane(() => ({ ...props }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry
        attach="geometry"
        args={[100, 100]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}
