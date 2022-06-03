import "./App.css";
import { useState, Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
// import Model from './components/Model';
import { OrbitControls } from "@react-three/drei";

import Model from "./components/BoschbetonV101";
import RearWall from "./components/TestBoschbetonV101.js";

function App() {
  const [loop, setLoop] = useState(1);
  const [width, setWidth] = useState(0);
  const [btnShowHide, setBtnShowHide] = useState({
    show: false,
    caption: "show",
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
      </div>
      <Canvas camera={{ position: [-5, 4, 5] }}>
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={1000} />
        <Suspense fallback={null}>
          <Model loop={loop} poX={width} />
          <RearWall
            poX={width}
            poZ={loop}
            // width={width}
            visible={btnShowHide.show}
            // scaleX={}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
