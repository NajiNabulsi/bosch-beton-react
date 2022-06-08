import React from "react";

/** floor compnents */
export default function Ground(props) {
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[20, 0, -20]}
      >
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color={0x0ff000} />
      </mesh>

      <mesh rotation={[0.001, 0, 0]}>
        <gridHelper position={[20, 0.01, -20]} args={[100, 100]} />
      </mesh>
    </>
  );
}
