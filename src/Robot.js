import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Robot() {
  const leftArm = useRef();
  const rightLeg = useRef();
  const leftLeg = useRef();

  // Animate walking + waving
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Legs walking motion
    if (rightLeg.current && leftLeg.current) {
      rightLeg.current.rotation.x = Math.sin(t * 2) * 0.5;
      leftLeg.current.rotation.x = -Math.sin(t * 2) * 0.5;
    }

    // Left arm waving
    if (leftArm.current) {
      leftArm.current.rotation.z = Math.sin(t * 3) * 0.5;
    }
  });

  return (
    <group>
      {/* Head */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[1.5, 2, 1]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Switch */}
      <mesh position={[0, 1.2, 0.6]}>
        <boxGeometry args={[0.5, 0.2, 0.2]} />
        <meshStandardMaterial emissive="purple" emissiveIntensity={2} />
      </mesh>

      {/* Left Arm (waving) */}
      <mesh ref={leftArm} position={[-1.2, 1.5, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.4]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Right Arm (stationary) */}
      <mesh position={[1.2, 1.5, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.4]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Legs */}
      <mesh ref={leftLeg} position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="dimgray" />
      </mesh>

      <mesh ref={rightLeg} position={[0.5, 0, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.5]} />
        <meshStandardMaterial color="dimgray" />
      </mesh>
    </group>
  );
}

export default Robot;
