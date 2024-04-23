import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { Raycaster, Quaternion } from "three";
import { clamp, lerp } from "three/src/math/MathUtils";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

export function Player({
  walk = 3,
  jump = 4,
  input = () => ({ move: [0, 0, 0], look: [0, 0] })
}) {
  const { camera, scene } = useThree();

  const speed = new Vector3(walk / 2, jump, walk);
  const offset = new Vector3(0, 0, 0);
  const gaze = new Quaternion();
  const yaw = new Quaternion();
  const pitch = new Quaternion();
  const down = new Vector3(0, -1, 0);
  const yAxis = new Vector3(0, 1, 0);
  const xAxis = new Vector3(1, 0, 0);
  const raycaster = new Raycaster(new Vector3(0, 0, 0), down, 0, 2);



  const updateOrientation = ([x, y]) => {
    const cameraSpeed = 3;
    const step = 0.3;
    let phi = 0;
    let theta = 0;
    phi = lerp(phi, -x * cameraSpeed, step);
    theta = lerp(theta, -y * cameraSpeed, step);
    theta = clamp(theta, -Math.PI / 3, Math.PI / 3);

    yaw.setFromAxisAngle(yAxis, phi);
    pitch.setFromAxisAngle(xAxis, theta);
    gaze.multiplyQuaternions(yaw, pitch).normalize();
  };


  useFrame(() => {
    const { move, look} = input();
    updateOrientation(look);

    camera.position.add(move);

    //const walkable = scene.children;

    raycaster.set(camera.position, down);
    //const ground = raycaster.intersectObjects(walkable)[0];
    // if (ground) {
      offset
        .fromArray(move)
        .normalize()
        //.multiply(running ? speed.clone().multiplyScalar(2.5) : speed)
        .applyQuaternion(yaw)
        //.applyQuaternion(getSlope(ground));

      camera.position.add(offset);
    // }

    camera.quaternion.copy(gaze);
  });

  return null;
}
