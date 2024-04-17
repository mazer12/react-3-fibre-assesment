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



function Effects() {
  const { size } = useThree()
  useFrame((state, delta) => {
    //console.log("Camera Position:", state.camera.position.toArray()); // Print camera position
    //camera.aspect = size.width / size.height;
    //camera.updateProjectionMatrix();
    easing.damp3(state.camera.position, [state.pointer.x,state.pointer.y, 8 + Math.atan(state.pointer.x * 2)], 0.9, delta)
    state.camera.lookAt(state.camera.position.x * 0.1, -1, 0)
  })
  return (
    <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
      {/* <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} /> */}
      <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blur width={size.width * 1.25} edgeStrength={10} />
      {/* <Bloom luminanceThreshold={1} intensity={1} levels={4} mipmapBlur/> */}
      {/* <TiltShift2 samples={5} blur={0.1} /> */}
      <ToneMapping />
    </EffectComposer>
  )
}
