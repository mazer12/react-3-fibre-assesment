import { useMemo, useEffect } from "react"; // Import necessary hooks from the React library
import { useRef } from 'react'
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from 'three'
import * as THREE from 'three';


export function keyboardControls() {
    const keyboard = useMemo(() => ({}), []); // Create a memoized object to store keyboard state
  
    // Event handler for keydown event
    const keydown = (e) => (keyboard[e.key] = true); // Set the corresponding key in the keyboard object to true when pressed
  
    // Event handler for keyup event
    const keyup = (e) => (keyboard[e.key] = false); // Set the corresponding key in the keyboard object to false when released
  
    useEffect(() => {
      // Add event listeners for keydown and keyup events
      document.addEventListener("keydown", keydown);
      document.addEventListener("keyup", keyup);
  
      // Clean up the event listeners when the component unmounts
      return () => {
        document.removeEventListener("keydown", keydown);
        document.removeEventListener("keyup", keyup);
      };
    });
  
    return keyboard; // Return the keyboard object with the current keyboard state
}


export default function WasdControls({orbitControls}) {
  const { camera } = useThree()
  const code = keyboardControls()
  const moveForward = (distance) => { 
    // Get the direction the camera is facing
    const vec = new Vector3().set(0, 0, -1).applyQuaternion(camera.quaternion).multiplyScalar(distance);
    // Move the camera in the direction it's facing
    camera.position.add(vec);
  
  // Update the orbitControls target based on the camera movement
    orbitControls.current.target.add(vec)
  }
  const moveRight = (distance) => {
    const vec = new Vector3().set(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(distance);
    camera.position.add(vec);
    // Update the orbitControls target based on the camera movement
  orbitControls.current.target.add(vec)
  }

  useFrame((_, delta) => {
    const speed = 8;
    if (code['w']) moveForward(delta * speed)
    if (code['a']) moveRight( -delta * speed)
    if (code['s']) moveForward( -delta * speed)
    if (code['d']) moveRight(delta * speed)
  })
  return null

}
