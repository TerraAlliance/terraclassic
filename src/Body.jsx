import { Text } from "@react-three/drei"
import Lunc from "./components/Lunc"
import { useWindowSize } from "@uidotdev/usehooks"
import { useSpringValue, animated } from "@react-spring/three"

export default function Body() {
  return (
    <>
      <ambientLight />
      <pointLight decay={0} distance={13000} intensity={30} position={[0, 0, 10000]} />
      <Menu font="./GothamBook.otf" />
      <Title />
      <Lunc scale={130} />
    </>
  )
}

function Title() {
  const size = useWindowSize()
  const fontSize = Math.min(Math.max(size.width / 20, 40), 70)
  const position = [0, size.height / 4, 0]
  const maxWidth = size.width / 1.2

  return (
    <>
      <Text position={position} color="white" maxWidth={maxWidth} fontSize={fontSize} textAlign="center" font="./GothamLight.otf">
        WELCOME TO TERRA CLASSIC
      </Text>
    </>
  )
}

function Menu({ font }) {
  const size = useWindowSize()
  const positionY = size.height / 2 - 50
  const selectedPosition = useSpringValue(-300, { config: { mass: 1, friction: 15, tension: 350, clamp: true } })

  return (
    <>
      <mesh position={[0, positionY, 0]} rotation-z={90 * (Math.PI / 180)}>
        <capsuleGeometry args={[25, 750, 5, 20]} />
        <meshStandardMaterial color={"black"} transparent="true" opacity={0.5} depthWrite={false} />
      </mesh>
      <animated.mesh position={selectedPosition.to((v) => [v, positionY, 0])} rotation-z={90 * (Math.PI / 180)}>
        <capsuleGeometry args={[25, 150, 5, 20]} />
        <meshStandardMaterial roughness={0.7} metalness={1} color={0xfcba03} transparent="true" opacity={0.3} depthWrite={false} />
      </animated.mesh>
      <Text position={[-300, positionY, 0]} color="white" fontSize={20} font={font}>
        Home
      </Text>
      <Text position={[-150, positionY, 0]} color="white" fontSize={20} font={font}>
        Learn
      </Text>
      <Text position={[0, positionY, 0]} color="white" fontSize={20} font={font}>
        Ecosystem
      </Text>
      <Text position={[150, positionY, 0]} color="white" fontSize={20} font={font}>
        Community
      </Text>
      <Text position={[300, positionY, 0]} color="white" fontSize={20} font={font}>
        Build
      </Text>
    </>
  )
}
