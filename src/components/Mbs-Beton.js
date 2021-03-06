/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/** logo component show on the ground */
export default function Model({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/mbs-Beton.glb");

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[-2, 0.1, 4.5]}
      rotation={[0, -Math.PI / 2, -0.01]}
      scale={[4, 0.01, 4]}
    >
      <mesh
        geometry={nodes.Text.geometry}
        material={new THREE.MeshBasicMaterial({ color: 0x565252 })}
        material-roughness={[1]}
        material-metalness={[1]}
        position={[-0.29, 0, 0.2]}
        rotation={[3.1, 1.57, -3.11]}
      />
      <mesh
        geometry={nodes.red.geometry}
        material={new THREE.MeshBasicMaterial({ color: 0xce2613 })}
        material-color={"red"}
        material-roughness={[0]}
        material-metalness={[1]}
        position={[-0.34, 0, 0.35]}
      />
      <mesh
        geometry={nodes.green.geometry}
        material={new THREE.MeshBasicMaterial({ color: 0x00611b })}
        material-roughness={[1]}
        position={[-0.34, 0, 0.64]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/mbs-Beton.glb");
