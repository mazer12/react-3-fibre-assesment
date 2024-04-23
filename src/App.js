import * as THREE from "three"
import { Canvas, useFrame, useThree} from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import { useEffect } from "react"
import { Stage, OrbitControls } from "@react-three/drei"
import { EffectComposer, Selection, Outline, N8AO, TiltShift2, ToneMapping, Bloom } from "@react-three/postprocessing"
import { Scene } from "./Scene"
import WasdControls  from "./KeyboardControls"
import TouchControls from "./TouchControls"

//import { Player } from "./Player"
//import { mouseCapture} from "./MouseCapture"


// Function to get player input from keyboard and mouse

/*function getInput(keyboard, mouse) {
  let [x, y, z] = [0, 0, 0];
  // Checking keyboard inputs to determine movement direction
  if (keyboard["s"]) z += 1.0; // Move backward
  if (keyboard["w"]) z -= 1.0; // Move forward
  if (keyboard["d"]) x += 1.0; // Move right
  if (keyboard["a"]) x -= 1.0; // Move left
  if (keyboard[" "]) y += 1.0; // Jump

  // Returning an object with the movement and look direction
  return {
    move: [x, y, z],
    look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight], // Mouse look direction
    //running: keyboard["Shift"], // Boolean to determine if the player is running (Shift key pressed)
  };
}*/




export const App = () => {
  //const keyboard = keyboardControls();
  //const mouse = mouseCapture();

  // Detect if the device supports touch input
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  //console.log(isTouchDevice)

  const orbitControls = useRef();
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(0,0,0));

  // Function to update camera position
  const updateCameraPosition = (position) => {
    setTargetPosition(position);
  };

  return(
  <Canvas dpr={[1, 1.5]} >
    <color attach="background" args={["#101010"]} />
    <ambientLight intensity={1} />
      <Stage enviroment={"sunset"}>
        <Selection>
          <Effects/>
          <Scene/>  
          <OrbitControls ref={orbitControls} target={targetPosition} rotateSpeed={0.5} enableDamping={false}/>
          {isTouchDevice ? (
          <TouchControls orbitControls={orbitControls} />
        ) : (
          <WasdControls orbitControls={orbitControls} />
        )}
          <CameraPositionUpdater onUpdatePosition={updateCameraPosition}/>
        </Selection>
      </Stage>
  </Canvas>
)}

const CameraPositionUpdater = ({ onUpdatePosition }) => {
  const { camera } = useThree();

  useFrame(() => {
    // Call the onUpdatePosition function with the camera position
    //console.log('Camera Position:', camera.position);
    onUpdatePosition(camera.position);
    
  });

  return null;
}


//Define post processing effects
function Effects() {
  return (
    <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />    
      <ToneMapping />
    </EffectComposer>
  )
}
