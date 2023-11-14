import { Canvas } from "@react-three/fiber"
import { Hud, OrthographicCamera, Text } from "@react-three/drei"

import Lunc from "./components/Lunc"

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
          <Home />
        </Hud>
      </Canvas>
    </div>
  )
}

function Home() {
  return (
    <>
      <Menu />
      <Text position={[0, 250, 0]} color="white" anchorX="center" anchorY="middle" fontSize={70} font="./GothamLight.otf">
        WELCOME TO TERRA CLASSIC
      </Text>
      <Lunc scale={130} />
    </>
  )
}

function Menu() {
  const positionY = 440
  return (
    <>
      <Text position={[-300, positionY, 0]} color="white" anchorX="center" anchorY="middle" fontSize={20} font="./GothamBook.otf">
        Learn
      </Text>
      <Text position={[-150, positionY, 0]} color="white" anchorX="center" anchorY="middle" fontSize={20} font="./GothamBook.otf">
        Network
      </Text>
      <Text position={[0, positionY, 0]} color="white" anchorX="center" anchorY="middle" fontSize={20} font="./GothamBook.otf">
        Ecosystem
      </Text>
      <Text position={[150, positionY, 0]} color="white" anchorX="center" anchorY="middle" fontSize={20} font="./GothamBook.otf">
        Community
      </Text>
      <Text position={[300, positionY, 0]} color="white" anchorX="center" anchorY="middle" fontSize={20} font="./GothamBook.otf">
        Build
      </Text>
    </>
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
