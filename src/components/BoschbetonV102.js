/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Clone } from "@react-three/drei";
import * as THREE from "three";
import { LoopOnce } from "three";

export default function Model({ ...props }) {
  const group = useRef();
  const wallGroup = useRef();

  const [xPostion, setXPostion] = useState([]);

  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("/boschbetonV102.glb");
  // const { ref, actions } = useAnimations(animations, group);
  // console.log(actions["sid-leftAction"]);

  // useEffect(() => {
  //   actions["sid-leftAction"]?.play().setLoop(THREE.LoopOnce, 0);
  //   actions["sid-rightAction"]?.play().setLoop(THREE.LoopOnce, 0);
  // }, []);

  useEffect(() => {
    setXPostion(ref.current.position);
    // console.log(x);
  }, [props.poX]);

  const createSideLoop = () => {
    let side = [];
    for (var i = 0; i < props.loop; i++) {
      var z = i;
      side[i] = [z];
    }
    return side;
  };
  // console.log('nodes["sid-right"]:', nodes["sid-right"].position);
  // console.log("ref: ", ref.current.position.x);
  // console.log("group: ", group.current.position);
  // console.log("second-sid-left: ", nodes["second-sid-left"]);
  // console.log("nodes: ", nodes);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* <mesh
          name="car001"
          geometry={nodes.car001.geometry}
          material={materials["Material.001"]}
          position={[-1.83, 0.4, 0.11]}
          rotation={[0, -Math.PI / 2, 0]}
        /> */}
        {/* <mesh
          name="flour001"
          geometry={nodes.flour001.geometry}
          // material={nodes.flour001.material}
          material={new THREE.MeshBasicMaterial({ color: 0xa3a3a3 })}
          material-roughness={[0.2]}
          material-metalness={[0]}
          material-color={"light blue"}
          position={[23.27, 0, -39.94]}
        /> */}
      </group>

      <group name="wall" ref={wallGroup}>
        <group name="right-left">
          {createSideLoop().map((cords, i) => (
            <>
              <mesh
                key={`right` + +i}
                ref={ref}
                name="sid-right"
                geometry={nodes["sid-right"].geometry}
                material={nodes["sid-right"].material}
                position={[2.77 + props.poX, 0.2, cords * -1]}
              />
              <mesh
                key={"left" + i}
                name="sid-left"
                geometry={nodes["sid-left"].geometry}
                material={nodes["sid-left"].material}
                position={[-4.73, 0.2, cords * -1]}
                rotation={[-Math.PI, 1.57, -Math.PI]}
              />
            </>
          ))}
        </group>
        <group name="rear-wall" visible={props.v}>
          <mesh
            name="rear-wall-midel"
            geometry={nodes["rear-wall-midel"].geometry}
            material={nodes["rear-wall-midel"].material}
            position={[-0.93 + props.poX / 2, 0.3, -0.4 - props.poZ + 1]}
            scale={[Math.floor(props.poX / 2 + 1), 1, 1]}
          />
          <mesh
            name="rear-wall-left"
            geometry={nodes["rear-wall-left"].geometry}
            material={nodes["rear-wall-left"].material}
            position={[-3.86, 0.3, -0.4 - props.poZ + 1]}
          />
          <mesh
            name="rear-Wall-right"
            geometry={nodes["rear-Wall-right"].geometry}
            material={nodes["rear-Wall-right"].material}
            position={[1.99 + props.poX, 0.3, -0.4 - props.poZ + 1]}
          />
        </group>
      </group>
      {props.areas.second && (
        <group name="second-wall" position={[9 + props.poX, 0, -0]}>
          <group name="second-right-left">
            {createSideLoop().map((cords, i) => (
              <>
                <Clone
                  key={`right` + i}
                  name="second-sid-right"
                  object={nodes["sid-right"]}
                  position={[2.77 + props.poX, 0.2, cords * -1]}
                />
                <Clone
                  key={"left" + i}
                  name="second-sid-left"
                  object={nodes["sid-left"]}
                  position={[-4.73, 0.2, cords * -1]}
                />
              </>
            ))}
          </group>
          <group name="second-rear-wall" visible={props.v}>
            <Clone
              name="second-rear-wall-midel"
              object={nodes["rear-wall-midel"]}
              position={[-0.93 + props.poX / 2, 0.2, -0.5 - props.poZ + 1]}
              scale={[Math.floor(props.poX / 2 + 1), 1, 1]}
            />
            <Clone
              name="second-rear-wall-left"
              object={nodes["rear-wall-left"]}
              position={[-3.86, 0.2, -0.5 - props.poZ + 1]}
            />
            <Clone
              name="second-rear-Wall-right"
              object={nodes["rear-Wall-right"]}
              position={[1.99 + props.poX, 0.2, -0.5 - props.poZ + 1]}
            />
          </group>
        </group>
      )}

      {props.areas.third && (
        <group name="thrid-wall" position={[18 + props.poX, 0, -0]}>
          <group name="third-right-left">
            {createSideLoop().map((cords, i) => (
              <>
                <Clone
                  key={`right` + +i}
                  name="thrid-sid-right"
                  object={nodes["sid-right"]}
                  position={[2.77 + props.poX, 0.2, cords * -1]}
                />
                <Clone
                  key={"left" + i}
                  name="sid-left"
                  object={nodes["sid-left"]}
                  position={[-4.73 + props.poX, 0.2, cords * -1]}
                  rotation={[-Math.PI, 1.57, -Math.PI]}
                />
              </>
            ))}
          </group>
          <group name="thrid-rear-wall" visible={props.v}>
            <Clone
              name="thrid-rear-wall-midel"
              object={nodes["rear-wall-midel"]}
              position={[-0.93 + props.poX / 2, 0.2, -0.5 - props.poZ + 1]}
              scale={[Math.floor(props.poX / 2 + 1), 1, 1]}
            />
            <Clone
              name="thrid-rear-wall-left"
              object={nodes["rear-wall-left"]}
              position={[-3.86, 0.2, -0.5 - props.poZ + 1]}
            />
            <Clone
              name="thrid-rear-Wall-right"
              object={nodes["rear-Wall-right"]}
              position={[1.99 + props.poX, 0.2, -0.5 - props.poZ + 1]}
            />
          </group>
        </group>
      )}
      {props.areas.four && (
        <group name="four-thrid-wall" position={[27 + props.poX, -0, -0]}>
          <group name="four-right-left">
            {createSideLoop().map((cords, i) => (
              <>
                <Clone
                  key={`right` + +i}
                  name="four-sid-right"
                  object={nodes["sid-right"]}
                  position={[2.77 + props.poX, 0.2, cords * -1]}
                />
                <Clone
                  key={"left" + i}
                  name="four-sid-left"
                  object={nodes["sid-left"]}
                  position={[-4.73 + props.poX, 0.2, cords * -1]}
                  rotation={[-Math.PI, 1.57, -Math.PI]}
                />
              </>
            ))}
          </group>
          <group name="four-rear-wall" visible={props.v}>
            <Clone
              name="four-rear-wall-midel"
              object={nodes["rear-wall-midel"]}
              position={[-0.93 + props.poX / 2, 0.2, -0.5 - props.poZ + 1]}
              scale={[Math.floor(props.poX / 2 + 1), 1, 1]}
            />
            <Clone
              name="four-rear-wall-left"
              object={nodes["rear-wall-left"]}
              position={[-3.86, 0.2, -0.5 - props.poZ + 1]}
            />
            <Clone
              name="four-rear-Wall-right"
              object={nodes["rear-Wall-right"]}
              position={[1.99 + props.poX, 0.2, -0.5 - props.poZ + 1]}
            />
          </group>
        </group>
      )}
    </group>
  );
}

useGLTF.preload("/boschbetonV102.glb");
