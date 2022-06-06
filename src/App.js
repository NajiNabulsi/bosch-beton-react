/** npx gltfjsx boschbetonV101.glb */
/** npx i @react-three/cannon */

import "./App.css";
import { useState, Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
// import Model from './components/Model';
import { Clone, OrbitControls } from "@react-three/drei";
import { useBox, Physics } from "@react-three/cannon";

import Model from "./components/BoschbetonV102";
// import Model from "./components/BoschbetonV101";
import RearWall from "./components/TestBoschbetonV101.js";

import Ball from "./components/Ball";
import Ground from "./components/Ground";

function App() {
  const [loop, setLoop] = useState(1);
  const [width, setWidth] = useState(0);
  const [btnShowHide, setBtnShowHide] = useState({
    show: false,
    caption: "show",
  });
  const [areas, setAreas] = useState({
    second: false,
    third: false,
    four: false,
  });

  const runLoop = (event) => {
    setLoop(parseInt(event.target.value));
  };

  const sideWidth = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const showHideBtn = () => {
    if (btnShowHide.show === false) {
      setBtnShowHide({ show: true, caption: "Hide" });
    } else {
      setBtnShowHide({ show: false, caption: "Show" });
    }
  };

  const twoClickHandel = () => {
    if (areas.second === false) {
      setAreas({ ...areas, second: true });
    } else {
      setAreas({ ...areas, second: false });
    }
  };

  const thirdClickHandel = () => {
    if (areas.third === false) {
      setAreas({ ...areas, third: true });
      // if(areas.second=== false)
      // setAreas({ second: true, third: true });
    } else {
      setAreas({ ...areas, third: false });
    }
  };

  console.log("areas: ", areas);
  return (
    <>
      <div className="side-bar">
        <div>
          <label>Long</label>
          <input type={"number"} onChange={runLoop} min={1} max={20} step={1} />
        </div>
        <div>
          <label>Width</label>
          <input
            type={"number"}
            onChange={sideWidth}
            min={0}
            max={5}
            step={1}
          />
        </div>
        <div>
          <button className="btn-show" onClick={showHideBtn}>
            {btnShowHide.caption}
          </button>
        </div>
        <div className="areas">
          <div onClick={twoClickHandel}>2</div>
          <div onClick={thirdClickHandel}>3</div>
          <div>4</div>
        </div>
      </div>
      <Canvas camera={{ position: [-5, 4, 5] }}>
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={1000} />
        <Suspense fallback={null}>
          {/* <Physics> */}
          {/* <Ball position={[0.5, 7, 0]} color={"red"} /> */}
          <Model
            loop={loop}
            poX={width}
            poZ={loop}
            v={btnShowHide.show}
            areas={areas}
          />

          {/* <Model loop={loop} poX={width} /> */}
          {/* <RearWall
            poX={width}
            poZ={loop}
            // width={width}
            visible={btnShowHide.show}
            // scaleX={}
          /> */}
          {/* <Ground rotation={[-Math.PI / 2, 0, 0]} /> */}
          {/* </Physics> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
