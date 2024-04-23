import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

export default function TouchControls({ orbitControls }) {
  const { camera } = useThree();
  const touchStartRef = useRef({ x: 0, y: 0 });

  const handleTouchStart = (event) => {
    touchStartRef.current.x = event.touches[0].clientX;
    touchStartRef.current.y = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    const deltaX = (touchX - touchStartRef.current.x) * 0.1; // Adjust sensitivity as needed
    const deltaY = (touchY - touchStartRef.current.y) * 0.1;

    // Move camera based on touch input
    const direction = new THREE.Vector3(deltaX, deltaY, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(camera.up, new THREE.Vector3(0, 1, 0));
    direction.applyQuaternion(quaternion);

    camera.position.add(direction);

    // Update touch start position for next move
    touchStartRef.current.x = touchX;
    touchStartRef.current.y = touchY;

    // Update orbitControls target to keep it in sync with camera position
    orbitControls.target.copy(camera.position);
  };

  useEffect(() => {
    const canvas = document.querySelector('.canvas-container');

    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
}
