/** npx gltfjsx boschbetonV101.glb */
/** npx i @react-three/cannon */

/** import from react */
import "./App.css";
import { useState, Suspense } from "react";

/** import from fiber */
import { Canvas, useFrame } from "@react-three/fiber";

/** import from drei */
import { OrbitControls } from "@react-three/drei";
import { useBox, Physics } from "@react-three/cannon";

/** import 3d model */
import Model from "./components/BoschbetonV102";
import Mbs from "./components/Mbs-Beton.js";
import Trucke from "./components/Trucke";
import Tractor from "./components/Tractor";

/** import from local components */
import Ground from "./components/Ground";
import Logo from "./components/Logo";

function App() {
  /** save how long the sides is */
  const [loop, setLoop] = useState(10);

  /** save how width of the sides is */
  const [width, setWidth] = useState(0);

  /** save the visibility of the rear wall */
  const [btnShowHide, setBtnShowHide] = useState({
    show: false,
    caption: "Show",
  });

  /** control the visibility of the areas */
  const [areas, setAreas] = useState({
    second: false,
    third: false,
    four: false,
  });

  // /** test model (delet me) */
  // const [switchModelState, setSwitchModelState] = useState("Tractor");

  /** set how long the sides is */
  const runLoop = (event) => {
    if (parseInt(event.target.value) > 10) {
      setLoop(parseInt(event.target.value));
    } else setLoop(10);
  };

  /** set the width of the sides is */
  const sideWidth = (event) => {
    if (parseInt(event.target.value) > -1) {
      setWidth(parseInt(event.target.value));
    } else setWidth(0);
  };

  /** set the visibility of the rear wall */
  const showHideBtn = () => {
    if (btnShowHide.show === false) {
      setBtnShowHide({ show: true, caption: "Hide" });
    } else {
      setBtnShowHide({ show: false, caption: "Show" });
    }
  };

  /** set the visibility of the areas */
  /** set the visibility of the second areas */
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

  /** set the visibility of the third areas */
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

  /** set the visibility of the four areas */
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
        <h1>DEMO</h1>

        <Logo />
        <div className="input-labels">
          <label>Lengte</label>
          <input
            type={"number"}
            onChange={runLoop}
            min={10}
            max={20}
            step={1}
            placeholder="10"
          />
        </div>
        <div className="input-labels">
          <label>Breedte</label>
          <input
            type={"number"}
            onChange={sideWidth}
            min={0}
            max={5}
            step={1}
            placeholder="0"
          />
        </div>
        <div>
          <button className="btn-show" onClick={showHideBtn}>
            {btnShowHide.caption}
          </button>
        </div>
        <div className="areas-container">
          <p>Hoeveel gebieden?</p>
          <div className="areas">
            <div onClick={twoClickHandel}>2</div>
            <div onClick={thirdClickHandel}>3</div>
            <div onClick={fourClickHandel}>4</div>
          </div>
        </div>
      </div>
      <div className="left-side-bar">
        <div className="scroll-here">Scroll here</div>
        <div className="scroll-here-arrow">↓</div>
        <div className="cart"></div>
      </div>
      <Canvas camera={{ position: [-8, 8, 8], fov: 75 }}>
        {/* <Canvas camera={{ position: [-5, 3, 8] }}> */}
        <OrbitControls />
        <pointLight position={[0, 15, 10]} />
        <pointLight position={[10, 15, 0]} />
        <pointLight position={[-10, 15, 0]} />
        <ambientLight intensity={1000} />
        {/* <axesHelper /> */}

        <Physics>
          <Ground />
          <Suspense fallback={null}>
            <Model
              loop={loop}
              poX={width}
              poZ={loop}
              v={btnShowHide.show}
              areas={areas}
            />
            {/* Mbs logo component */}
            <Mbs />
            {/* <Trucke /> */}
            <Tractor />
          </Suspense>
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
