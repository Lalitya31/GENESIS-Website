import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function HumanoidRobot() {
  const robotRef = useRef();
  const [wave, setWave] = useState(false);
  const armRef = useRef();
  const handRef = useRef();

  const walkSpeed = 0.02;
  const targetX = 0;

  useFrame(() => {
    if (!robotRef.current) return;

    if (!wave && robotRef.current.position.x < targetX) {
      robotRef.current.position.x += walkSpeed;
      const t = performance.now() / 200;
      robotRef.current.children[0].rotation.x = Math.sin(t) * 0.5;
      robotRef.current.children[1].rotation.x = Math.sin(t + Math.PI) * 0.5;
    } else if (!wave) {
      setWave(true);
    }

    if (wave && armRef.current && handRef.current) {
      const t = performance.now() / 300;
      armRef.current.rotation.z = Math.sin(t) * 0.5 + 0.5;
      handRef.current.rotation.y = Math.sin(t) * 0.5;
    }
  });

  return (
    <group ref={robotRef} position={[-5, 0, 0]}>
      <group position={[-0.3, -1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </group>
      <group position={[0.3, -1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </group>

      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.5]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      <group ref={armRef} position={[-0.6, 1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.6]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <group ref={handRef} position={[0, -0.35, 0]}>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="pink" />
          </mesh>
        </group>
      </group>

      <group position={[0.6, 1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.6]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <group position={[0, -0.35, 0]}>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="pink" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
