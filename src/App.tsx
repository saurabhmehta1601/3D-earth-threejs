import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import EarthMesh from "./Earth"

function App() {

  return (
    <Canvas >
      {/* <ambientLight color="#00FF00" intensity={0.2} />
      <SolarMesh /> */}
      <OrbitControls />
      <directionalLight color="yellow" position={[6, 0, 5]} />
      <directionalLight color="purple" position={[-6, 0, 5]} />
      <directionalLight color="red" position={[0, 0, 3]} />
      <ambientLight intensity={0.15} />
      <EarthMesh />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  )
}

export default App
