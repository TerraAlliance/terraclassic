import { Canvas } from "@react-three/fiber"
import { Hud, OrthographicCamera } from "@react-three/drei"

import Body from "./Body"

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
          <Body />
        </Hud>
      </Canvas>
    </div>
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
