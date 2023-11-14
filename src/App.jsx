import { Canvas } from "@react-three/fiber"

import Lunc from "./components/Lunc"

import { Hud, OrthographicCamera } from "@react-three/drei"

export default function App() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Background />
      <Canvas>
        <Hud>
          <OrthographicCamera makeDefault position={[0, 0, 1000]} far={10000} />
          <ambientLight />
          <pointLight decay={0} distance={13000} intensity={30} position={[0, 0, 10000]} />
          <pointLight decay={0} distance={6000} intensity={25} position={[0, -2000, -7000]} />
          <Box position={[-1.2, 0, 0]} />

          <Lunc scale={130} />
        </Hud>
      </Canvas>
    </div>
  )
}

function Box() {
  return (
    <mesh>
      <sphereGeometry args={[1, 50, 50]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  )
}

function Background() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: -1,
      }}
    ></div>
  )
}
