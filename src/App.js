/** npx gltfjsx boschbetonV101.glb */
/** npx i @react-three/cannon */

import "./App.css";
import { useState, Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Clone, OrbitControls } from "@react-three/drei";
import { useBox, Physics } from "@react-three/cannon";

import Model from "./components/BoschbetonV102";
import Mbs from "./components/Mbs-Beton.js";
import Trucke from "./components/Trucke";

function App() {
  const [loop, setLoop] = useState(10);
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
      setAreas({
        second: true,
        third: false,
        four: false,
      });
    } else {
      setAreas({
        second: false,
        third: false,
        four: false,
      });
    }
  };

  const thirdClickHandel = () => {
    if (areas.third === false) {
      setAreas({ second: true, third: true, four: false });
    } else {
      setAreas({
        ...areas,
        third: false,
        four: false,
      });
    }
  };

  const fourClickHandel = () => {
    if (areas.four === false) {
      setAreas({
        second: true,
        third: true,
        four: true,
      });
    } else {
      setAreas({ ...areas, four: false });
    }
  };

  return (
    <>
      <div className="side-bar">
        <div>
          <label>Lengte</label>
          <input
            type={"number"}
            onChange={runLoop}
            min={10}
            max={20}
            step={1}
          />
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
        <div className="areas-container">
          <p>hoeveel gebieden?</p>
          <div className="areas">
            <div onClick={twoClickHandel}>2</div>
            <div onClick={thirdClickHandel}>3</div>
            <div onClick={fourClickHandel}>4</div>
          </div>
        </div>
      </div>
      <Canvas camera={{ position: [-5, 3, 8] }}>
        <OrbitControls />
        <pointLight position={[0, 15, 10]} />
        <pointLight position={[10, 15, 0]} />
        <pointLight position={[-10, 15, 0]} />
        <ambientLight intensity={1000} />
        <axesHelper />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[20, 0, -20]}>
          <planeBufferGeometry
            args={[100, 100]}
            widthSegments={[10]}
            heightSegments={[10]}
          />
          <meshStandardMaterial
            // widthSegments={10}
            // heightSegments={10}
            wireframe
          />
        </mesh>
        <Suspense fallback={null}>
          <Model
            loop={loop}
            poX={width}
            poZ={loop}
            v={btnShowHide.show}
            areas={areas}
          />
          <Mbs />
          <Trucke />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
