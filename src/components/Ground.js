import React from "react";
// import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  // const [ref] = usePlane(() => ({ ...props }));
  return (
    <>
      <mesh
        // ref={ref} // rotation position did't work when I actve the ref
        castShadow
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[20, 0, -20]}
      >
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial
          attach="material"
          color={0x0ff000}
          // widthSegments={10}
          // heightSegments={10}
        />
      </mesh>

      <mesh rotation={[0.001, 0, 0]}>
        <gridHelper position={[20, 0.01, -20]} args={[100, 100]} />
        {/* <meshStandardMaterial attach="material" color={0xfffff} /> */}
      </mesh>
    </>
  );
}
