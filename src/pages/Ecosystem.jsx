import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"

import { state } from "../state"
import Satellite from "../components/Satellite"

export default function Ecosystem() {
  const size = useWindowSize()
  const maxWidth = size.width / 1.1

  const components = [Satellite, LuncAcademy, LuncAcademy, LuncAcademy, LuncAcademy, LuncAcademy]

  return (
    <group position={[(state.scroll.use() * size.width) / -5 + size.width * 2, 0, 0]}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        An Amazing Ecosystem
      </Text>

      {components.map((Component, index) => {
        return <Component key={index} position={[(index % 3) * 400 - 400, Math.floor(index / 3) * -400, 0]} scale={Math.min(size.width / 4, 130)} onClick={null} />
      })}
    </group>
  )
}

function LuncAcademy({ position, scale }) {
  return (
    <>
      <group position={position}>
        <mesh scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"blue"} transparent={true} opacity={0.4} />
        </mesh>
        <Text position={[0, -175, 0]} color="white" fontSize={40} textAlign="center" font="./GothamLight.otf">
          dApp
        </Text>
      </group>
    </>
  )
}
