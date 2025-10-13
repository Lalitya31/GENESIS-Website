import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "./Robot";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "white" }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Robot />
      </Canvas>
    </div>
  );
}

export default App;
