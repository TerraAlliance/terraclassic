import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"

import { state } from "../state"
import Terrarium from "../components/Terrarium"

export default function Community() {
  const size = useWindowSize()
  const maxWidth = size.width / 1.1

  const components = [Terrarium, LuncAcademy, Terrarium, Terrarium, Terrarium, Terrarium]

  return (
    <group position={[(state.scroll.use() * size.width) / -5 + size.width * 3, 0, 0]}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        And a Wonderful Community
      </Text>
      {components.map((Component, index) => {
        return <Component key={index} position={[(index % 3) * 400 - 400, Math.floor(index / 3) * -400, 0]} scale={Math.min(size.width / 4, 130)} />
      })}

      {/* <Terrarium scale={Math.min(size.width / 4, 130)} />
      <LuncAcademy scale={Math.min(size.width / 4, 130)} /> */}
    </group>
  )
}

function LuncAcademy({ position, scale }) {
  return (
    <>
      <group position={position}>
        <mesh scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"darkorange"} transparent={true} opacity={0.4} />
        </mesh>
        <Text position={[0, -175, 0]} color="white" fontSize={40} textAlign="center" font="./GothamLight.otf">
          Lunc Academy
        </Text>
      </group>
    </>
  )
}
