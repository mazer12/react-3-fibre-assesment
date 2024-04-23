import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3, Euler, Quaternion } from 'three';
import '../src/Popup.css';

const Popup = ({ onClose }) => {
  const { camera } = useThree();
  const [popupPosition, setPopupPosition] = useState(new Vector3());
  const [popupRotation, setPopupRotation] = useState(new Euler());

  // Update the position and rotation of the popup based on the camera's position and orientation
  useFrame(() => {
    if (camera) {
      // Get camera position and rotation
      const { position, quaternion } = camera;
      
      // Set the position of the popup to match the camera's position
      setPopupPosition(position);

      // Calculate the rotation of the popup based on the camera's rotation
      const popupQuaternion = new Quaternion().copy(quaternion);
      const popupEuler = new Euler().setFromQuaternion(popupQuaternion);
      
      // Set the rotation of the popup
      setPopupRotation(popupEuler);
    }
  });

  return (
    <Html position={popupPosition} rotation={popupRotation}>
      <div className='popup'>
        <div className='popup-inner'>
          <h3>Popup Opened</h3>
          {/* Close button to close the popup */}
          <button className='close-button' onClick={onClose}>Close</button>
        </div>
      </div>
    </Html>
  );
};

export default Popup;


