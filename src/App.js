import './App.css';
import {useState} from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
// import Model from './components/Model';
import {OrbitControls} from '@react-three/drei'
import {Html} from '@react-three/drei'
import Model from './components/BoschbetonV101'

function App() {
const [loop, setLoop] = useState(3)

const runLoop = (event)=>{
  setLoop(parseInt(event.target.value))
}


  return (
    <>
    <div className='side-bar'> 

<input type={'number'} onChange={runLoop} />
</div>
    <Canvas camera={{position : [-5,4,5]}}>
     
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={1000} />
      <Model loop = {loop}/>
    </Canvas>
    </>
  );
}

export default App;
