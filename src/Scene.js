import { useState, useCallback } from "react"
import { debounce } from "lodash"
import { useGLTF, useEnvironment, Text } from "@react-three/drei"
import { Select, Bloom } from "@react-three/postprocessing"
import Popup  from "./Popup"
import { useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import { EffectComposer } from "@react-three/postprocessing"



export function Scene(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/lobby-version13-transformed.glb')
  const { actions } = useAnimations(animations, group)
  const [showPopup, setShowPopup] = useState(false);

  const [hoveredObject, setHoveredObject] = useState(null);

  //We use this to identify which object is hovered over
  function handleObjectHover(name) {
    setHoveredObject(name);
  }

  return (
    <>
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Door" position={[28.969, 3.863, 18.915]} scale={0.29}>
          <mesh name="all_static_objects012" geometry={nodes.all_static_objects012.geometry} material={materials.PaletteMaterial001} />
          <mesh name="all_static_objects012_1" geometry={nodes.all_static_objects012_1.geometry} material={materials.PaletteMaterial002} />
        </group>
        <mesh name="top_layer002" geometry={nodes.top_layer002.geometry} material={materials.PaletteMaterial003} position={[30.634, 13.102, 22.777]} rotation={[0, -1.571, 0]} scale={0.846} />
        <mesh name="Bottom_layer004" geometry={nodes.Bottom_layer004.geometry} material={nodes.Bottom_layer004.material} position={[30.634, 0.918, 22.777]} rotation={[0, -1.571, 0]} scale={0.846} />
        <mesh name="lobby_walkable_paths" geometry={nodes.lobby_walkable_paths.geometry} material={materials['lobby-floor']} position={[28.969, 3.863, 18.95]} scale={0.29} />
        <mesh name="lobby_walkable_paths002" geometry={nodes.lobby_walkable_paths002.geometry} material={materials['aiStandardSurface58w/Texture.001']} position={[28.969, 3.863, 18.95]} scale={0.29} />
        <group name="lobby_all_static_objects" position={[28.969, 3.863, 18.95]} scale={0.29}>
          <mesh name="all_static_objects" geometry={nodes.all_static_objects.geometry} material={materials.PaletteMaterial004} />
          <mesh name="all_static_objects_1" geometry={nodes.all_static_objects_1.geometry} material={materials.elevatorRug} />
        </group>
        <mesh name="lobby_all_static_objects035" geometry={nodes.lobby_all_static_objects035.geometry} material={materials.PaletteMaterial005} position={[28.969, 3.863, 18.357]} scale={0.29} />
        
        {/* When user hovers over this object it changes the material color to highlight the hovered over object */}
        <Select onPointerOver={() => handleObjectHover('21jumpStreet_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="21jumpStreet_interaction_v1" geometry={nodes['21jumpStreet_interaction_v1'].geometry} material={materials['21jumpStreet_interaction_v1']} position={[27.177, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === '21jumpStreet_interaction_v1' ? "skyblue":"white"} />
        {/* We also have an onClick event, which triggers the popup */}
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>
  
        <Select onPointerOver={() => handleObjectHover('backToFuture_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="backToFuture_interaction_v1" geometry={nodes.backToFuture_interaction_v1.geometry} material={materials.backToFuture_interaction_v1} position={[24.654, 5.737, 15.246]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'backToFuture_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('bohemianRhapsody_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="bohemianRhapsody_interaction_v1" geometry={nodes.bohemianRhapsody_interaction_v1.geometry} material={materials.bohemianRhapsody_interaction_v1} position={[28.991, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'bohemianRhapsody_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('badBoys_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="badBoys_interaction_v1" geometry={nodes.badBoys_interaction_v1.geometry} material={materials.badBoys_interaction_v1} position={[25.379, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'badBoys_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('fordVFerrari_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="fordVFerrari_interaction_v1" geometry={nodes.fordVFerrari_interaction_v1.geometry} material={materials.fordVFerrari_interaction_v1} position={[30.795, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'fordVFerrari_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('gunShy_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="gunShy_interaction_v1" geometry={nodes.gunShy_interaction_v1.geometry} material={materials.gunShy_interaction_v1} position={[32.58, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'gunShy_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('interstellar_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="interstellar_interaction_v1" geometry={nodes.interstellar_interaction_v1.geometry} material={materials.interstellar_interaction_v1} position={[34.395, 9.3, 16.153]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'interstellar_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('kolya_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="kolya_interaction_v1" geometry={nodes.kolya_interaction_v1.geometry} material={materials.kolya_interaction_v1} position={[37.225, 9.3, 17.338]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'kolya_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('lebanon_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="lebanon_interaction_v1" geometry={nodes.lebanon_interaction_v1.geometry} material={materials.lebanon_interaction_v1} position={[37.225, 9.3, 19.062]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'lebanon_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('likeWater4Chocolate_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="likeWater4Chocolate_interaction_v1" geometry={nodes.likeWater4Chocolate_interaction_v1.geometry} material={materials.likeWater4Chocolate_interaction_v1} position={[37.225, 9.3, 20.788]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'likeWater4Chocolate_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('madMaxFuryRoad_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="madMaxFuryRoad_interaction_v1" geometry={nodes.madMaxFuryRoad_interaction_v1.geometry} material={materials.madMaxFuryRoad_interaction_v1} position={[37.225, 9.3, 22.506]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'madMaxFuryRoad_interaction_v1' ? "skyblue":"white"} />
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('mr&MrsSmith_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="mr&MrsSmith_interaction_v1" geometry={nodes['mr&MrsSmith_interaction_v1'].geometry} material={materials['mr&MrsSmith_interaction_v1']} position={[37.225, 9.3, 25.97]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'mr&MrsSmith_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('theGodfather_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="theGodfather_interaction_v1" geometry={nodes.theGodfather_interaction_v1.geometry} material={materials.theGodfather_interaction_v1} position={[37.686, 5.872, 17.394]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'theGodfather_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('theShining_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="theShining_interaction_v1" geometry={nodes.theShining_interaction_v1.geometry} material={materials.theShining_interaction_v1} position={[37.686, 5.872, 19.434]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'theShining_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('anOnFire_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="manOnFire_interaction_v1" geometry={nodes.manOnFire_interaction_v1.geometry} material={materials.manOnFire_interaction_v1} position={[37.225, 9.307, 24.231]} rotation={[1.572, 0, 1.573]} scale={0.29} material-color={hoveredObject === 'anOnFire_interaction_v1' ? "skyblue":"white"} />
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('scriptBoard_interaction_v1')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="scriptBoard_interaction_v1" geometry={nodes.scriptBoard_interaction_v1.geometry} material={materials.scriptBoard_interaction_v1} position={[29.185, 5.613, 15.362]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} material-color={hoveredObject === 'scriptBoard_interaction_v1' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('Us_movei_poster')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="Us_movei_poster" geometry={nodes.Us_movei_poster.geometry} material={materials['Us movei poster']} position={[32.194, 5.733, 15.227]} rotation={[Math.PI / 2, 0, 0]} material-color={hoveredObject === 'Us_movei_poster' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('blade_runner')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="blade_runner" geometry={nodes.blade_runner.geometry} material={materials['blade runner']} position={[33.995, 5.713, 15.224]} rotation={[Math.PI / 2, 0, 0]} material-color={hoveredObject === 'blade_runner' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('the_big_lebowski')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="the_big_lebowski" geometry={nodes.the_big_lebowski.geometry} material={materials['the big lebowski']} position={[26.269, 5.732, 15.224]} rotation={[Math.PI / 2, 0, 0]} material-color={hoveredObject === 'the_big_lebowski' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('planet_of_the_apes')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="planet_of_the_apes" geometry={nodes.planet_of_the_apes.geometry} material={materials['planet of the apes']} position={[35.786, 5.743, 15.234]} rotation={[Math.PI / 2, 0, 0]} material-color={hoveredObject === 'planet_of_the_apes' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('Plane010')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials.script} position={[23.987, 4.31, 25.492]} rotation={[0, 1.571, 0]} scale={0.961} material-color={hoveredObject === 'Plane010' ? "skyblue":"white"} />
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('empire_strikes_back')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="empire_strikes_back" geometry={nodes.empire_strikes_back.geometry} material={materials['empire strikes back']} position={[37.242, 9.345, 27.696]} rotation={[Math.PI / 2, 0, Math.PI / 2]} material-color={hoveredObject === 'empire_strikes_back' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>

        <Select onPointerOver={() => handleObjectHover('fear_&_loathing')} onPointerOut={() => handleObjectHover(null)} onClick={() => setShowPopup(true)}>
        <mesh name="fear_&_loathing" geometry={nodes['fear_&_loathing'].geometry} material={materials['fear & loathing']} position={[36.172, 9.297, 16.155]} rotation={[Math.PI / 2, 0, 0]} material-color={hoveredObject === 'fear_&_loathing' ? "skyblue":"white"}/>
        {showPopup && <Popup position={{ top: '-50vh', left: '90vw' }} onClose={() => setShowPopup(false)}/>} 
        </Select>
        

        
        <mesh name="lobby_all_static_objects031" geometry={nodes.lobby_all_static_objects031.geometry} material={materials.dark_wood_texture} position={[28.969, 3.863, 18.352]} scale={0.29} />
        <group name="lobby_all_static_objects030" position={[28.969, 3.841, 18.352]} scale={0.29}>
          <mesh name="all_static_objects040" geometry={nodes.all_static_objects040.geometry} material={materials.magazine} />
          <mesh name="all_static_objects040_1" geometry={nodes.all_static_objects040_1.geometry} material={materials['magazine.002']} />
        </group>
        <mesh name="lobby_all_static_objects038" geometry={nodes.lobby_all_static_objects038.geometry} material={materials['magazine.001']} position={[28.969, 3.863, 18.352]} scale={0.29} />
        <mesh name="lobby_all_static_objects047" geometry={nodes.lobby_all_static_objects047.geometry} material={materials.PaletteMaterial006} position={[24.503, 5.109, 16.397]} rotation={[Math.PI, -0.762, Math.PI]} scale={0.29} />
        <mesh name="lobby_all_static_objects052" geometry={nodes.lobby_all_static_objects052.geometry} material={materials.PaletteMaterial007} position={[24.257, 4.828, 26.544]} rotation={[0, -1.337, 0]} scale={0.29} />
        <mesh name="lobby_all_static_objects057" geometry={nodes.lobby_all_static_objects057.geometry} material={materials.marble_texture} position={[27.606, 3.863, 19.032]} scale={0.29} />
        <group name="Cube003" position={[37.643, 5.557, 25.863]} rotation={[0, 1.571, 0]} scale={[1.433, 1.129, 0.054]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Material.020']} />
        </group>
        <mesh name="21-Jump-Street_interaction_posters_v1001" geometry={nodes['21-Jump-Street_interaction_posters_v1001'].geometry} material={materials['21-Jump-Street interaction posters v1.002']} position={[32.144, 16.395, 23.641]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.712} />
        <mesh name="Back-To-The-Future_interaction_posters_v1001" geometry={nodes['Back-To-The-Future_interaction_posters_v1001'].geometry} material={materials['Back-To-The-Future interaction posters v1.002']} position={[30.898, 16.355, 23.646]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh name="Bad-Boys_interaction_posters_v1001" geometry={nodes['Bad-Boys_interaction_posters_v1001'].geometry} material={materials['Bad-Boys interaction posters v1.002']} position={[26.874, 16.655, 23.645]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.862} />
        <mesh name="Books006" geometry={nodes.Books006.geometry} material={materials.book4} position={[27.941, 16.25, 23.515]} scale={0.947} />
        <mesh name="Books007" geometry={nodes.Books007.geometry} material={materials.book1} position={[28.016, 16.244, 23.508]} rotation={[0, 0, 0.139]} scale={0.879} />
        <mesh name="Books010" geometry={nodes.Books010.geometry} material={materials.book3} position={[27.968, 16.55, 23.516]} scale={0.986} />
        <mesh name="Books011" geometry={nodes.Books011.geometry} material={materials.book2} position={[25.673, 15.236, 20.093]} rotation={[-1.687, -1.541, 3.019]} scale={1.223} />
        <mesh name="carpet001" geometry={nodes.carpet001.geometry} material={materials['carpet.002']} position={[28.31, 14.374, 19.697]} rotation={[0, -1.571, 0]} />
        <group name="Computer&Mouse_interaction_v2001" position={[25.735, 15.404, 19.503]} rotation={[0, -1.571, 0]}>
          <mesh name="Computer&Mouse_interaction_v2004" geometry={nodes['Computer&Mouse_interaction_v2004'].geometry} material={materials.PaletteMaterial009} />
          <mesh name="Computer&Mouse_interaction_v2004_1" geometry={nodes['Computer&Mouse_interaction_v2004_1'].geometry} material={materials.PaletteMaterial008} />
        </group>
        <mesh name="Computer&Mouse_interaction_v2002" geometry={nodes['Computer&Mouse_interaction_v2002'].geometry} material={materials['screen prom computer']} position={[25.486, 15.404, 19.468]} rotation={[0, -1.571, 0]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.020']} position={[25.499, 16.069, 21.611]} rotation={[0, -1.571, 0]} scale={[1.269, 1, 0.048]} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['script.001']} position={[25.925, 15.205, 18.499]} rotation={[-0.334, 1.554, 0.328]} scale={[-0.101, -0.012, -0.126]} />
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials.note} position={[25.654, 15.195, 19.399]} rotation={[Math.PI / 2, 1.506, -Math.PI / 2]} scale={[-0.063, -0.012, -0.064]} />
        <mesh name="Cube114" geometry={nodes.Cube114.geometry} material={materials['library wood.001']} position={[25.607, 14.582, 16.762]} rotation={[0, -1.571, 0]} scale={0.089} />
        <mesh name="Door_interaction_v1001" geometry={nodes.Door_interaction_v1001.geometry} material={materials['door wood.001']} position={[33.025, 15.923, 20.911]} rotation={[0, -1.571, 0]} scale={4.053} />
        <mesh name="Ferrari_interaction_posters_v1001" geometry={nodes.Ferrari_interaction_posters_v1001.geometry} material={materials['Ferrari interaction posters v1.002']} position={[29.833, 16.342, 23.636]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.76} />
        <mesh name="Gun-Shy_interaction_posters_v1001" geometry={nodes['Gun-Shy_interaction_posters_v1001'].geometry} material={materials['Gun-Shy interaction posters v1.002']} position={[25.444, 16.538, 18.823]} rotation={[Math.PI / 2, 0, Math.PI]} />
        <mesh name="Koyla_interaction_posters_v1001" geometry={nodes.Koyla_interaction_posters_v1001.geometry} material={materials['Koyla interaction posters v1.002']} position={[25.454, 16.578, 17.703]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.757} />
        <mesh name="Lamp-shade007" geometry={nodes['Lamp-shade007'].geometry} material={materials.PaletteMaterial010} position={[32.036, 14.362, 17.105]} rotation={[0, -1.571, 0]} />
        <mesh name="Scrip_board_screen_1_interaction_posters_v1001" geometry={nodes.Scrip_board_screen_1_interaction_posters_v1001.geometry} material={materials['Scrip_board_screen_1 interaction posters v1.002']} position={[29.775, 16.483, 16.826]} rotation={[Math.PI / 2, 0, 0]} scale={1.363} />
        <mesh name="Structure001" geometry={nodes.Structure001.geometry} material={materials['floor wood.001']} position={[28.661, 14.351, 19.836]} rotation={[0, -1.571, 0]} scale={4} />
        <mesh name="surounding_wood001" geometry={nodes.surounding_wood001.geometry} material={materials['surounding wood.004']} position={[25.457, 17.476, 20.434]} rotation={[Math.PI, 1.571, 0]} />
        <mesh name="top_light002" geometry={nodes.top_light002.geometry} material={materials.PaletteMaterial011} position={[26.926, 17.499, 19.836]} rotation={[0, -1.571, 0]} />
        <mesh name="Wolf3D_Body001" geometry={nodes.Wolf3D_Body001.geometry} material={materials.Wolf3D_Body} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        <mesh name="Wolf3D_Glasses001" geometry={nodes.Wolf3D_Glasses001.geometry} material={materials.Wolf3D_Glasses} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        <mesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials.Wolf3D_Hair} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        <mesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        <mesh name="Wolf3D_Outfit_Footwear001" geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials.Wolf3D_Outfit_Footwear} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        <mesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Wolf3D_Outfit_Top.001']} position={[34.896, 3.863, 28.231]} rotation={[Math.PI / 2, 0, 1.392]} scale={0.01} />
        
      </group>
    </group>

   
    </>
  )
}

