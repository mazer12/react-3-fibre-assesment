import * as THREE from "three"
import { easing } from "maath"
import { Canvas, useFrame, useThree} from "@react-three/fiber"
import { Sky, Bvh, PresentationControls, Stage, OrbitControls } from "@react-three/drei"
import { EffectComposer, Selection, Outline, N8AO, TiltShift2, ToneMapping, Bloom } from "@react-three/postprocessing"
import { Scene } from "./Scene"



export const App = () => (
  <Canvas  dpr={[1, 1.5]} camera={{ position: [0,-10,0], fov: 55 }} >
    {/* <color attach="background" args={["#101010"]} /> */}
    <ambientLight intensity={1} />
    <PresentationControls  speed={1} global={true} zoom={1} polar={[-1, Math.PI / 4]}>
      <Stage enviroment={"sunset"}>
        <Selection>
          <Effects/>
          <Scene scale={5.0} /> 
          
        </Selection>
      </Stage>
    </PresentationControls>  
  </Canvas>
)



//Define post processing effects
function Effects() {
  const { size } = useThree()
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x,state.pointer.y, state.pointer.z], 0.3, delta)  //Damp effect to make the camera movement natural
    state.camera.lookAt(state.camera.position.x * 0.1, -1, 0)  
  })
  return (
    <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
      <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />    
      <ToneMapping />
    </EffectComposer>
  )
}
