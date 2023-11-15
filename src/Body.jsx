import { useState, useEffect } from "react"
import { Text } from "@react-three/drei"
import { useWindowSize } from "@uidotdev/usehooks"
import { useSpringValue, animated } from "@react-spring/three"

import { app } from "./state"
import Lunc from "./components/Lunc"
import SwapMachine from "./components/SwapMachine"
import Terrarium from "./components/Terrarium"
// import Terra from "./components/Terra"

function stepRound(number, increment, offset) {
  return Math.round((number - offset) / increment) * increment + offset
}

app.scroll.set(0)
var timeout
window.onwheel = (ev) => {
  app.scroll.set((prev) => Math.max(Math.min(prev + ev.deltaY / 5, 600), 0))
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    app.scroll.set((prev) => stepRound(prev, 150, 0))
  }, "300")
}

export default function Body() {
  return (
    <>
      <ambientLight />
      <Menu font="./GothamBook.otf" />
      <Pages />
    </>
  )
}

function Menu({ font }) {
  const size = useWindowSize()
  const positionY = size.height / 2 - 50

  const scroll = app.scroll.use()
  const selectedPosition = useSpringValue(-300, { config: { mass: 1, friction: 30, tension: 2000, clamp: false } })

  useEffect(() => {
    selectedPosition.start(scroll - 300)
  }, [scroll])

  return (
    <>
      <mesh position={[0, positionY, 0]} rotation-z={90 * (Math.PI / 180)}>
        <capsuleGeometry args={[25, 700, 5, 20]} />
        <meshStandardMaterial color={"black"} transparent="true" opacity={0.6} depthWrite={false} />
      </mesh>
      <animated.mesh position={selectedPosition.to((v) => [v, positionY, 0])} rotation-z={90 * (Math.PI / 180)}>
        <capsuleGeometry args={[25, 100, 5, 20]} />
        <meshStandardMaterial roughness={0.3} metalness={1} color={0xfcba03} transparent="true" opacity={1} depthWrite={false} />
      </animated.mesh>
      <Text position={[-300, positionY, 0]} color={scroll === 0 ? "black" : "white"} fontSize={20} font={font}>
        Home
      </Text>
      <Text position={[-150, positionY, 0]} color={scroll === 150 ? "black" : "white"} fontSize={20} font={font}>
        Learn
      </Text>
      <Text position={[0, positionY, 0]} color={scroll === 300 ? "black" : "white"} fontSize={20} font={font}>
        Community
      </Text>
      <Text position={[150, positionY, 0]} color={scroll === 450 ? "black" : "white"} fontSize={20} font={font}>
        Ecosystem
      </Text>
      <Text position={[300, positionY, 0]} color={scroll === 600 ? "black" : "white"} fontSize={20} font={font}>
        Build
      </Text>
    </>
  )
}

function Pages() {
  const size = useWindowSize()

  const scroll = app.scroll.use()
  const selectedPosition = useSpringValue(-300, { config: { mass: 1, friction: 15, tension: 1000, clamp: true } })
  useEffect(() => {
    selectedPosition.start(scroll * (size.width / 150))
  }, [scroll])

  return (
    <>
      <pointLight decay={0} distance={13000} intensity={40} position={[0, 0, 10000]} />
      <Home selectedPosition={selectedPosition} size={size} />
      <Learn selectedPosition={selectedPosition} size={size} />
      <Community selectedPosition={selectedPosition} size={size} />
      <Ecosystem selectedPosition={selectedPosition} size={size} />
    </>
  )
}

function Home({ selectedPosition, size }) {
  const maxWidth = size.width / 1.1

  return (
    <animated.group position={selectedPosition.to((v) => [-v, 0, 0])}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        Welcome to Terra Classic
      </Text>
      <Text position={[0, -size.height / 4, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 40, 40), 70)} textAlign="center" font="./GothamLight.otf">
        {"Begin Your Journey"}
      </Text>
      <Lunc position={[0, 0, 0]} scale={130} />
      <Arrow rotation={270} position={[280, -size.height / 4, 0]} scale={300} />
    </animated.group>
  )
}

export function Arrow({ position, scale, rotation, onClick }) {
  const [hovered, setHover] = useState(false)
  return (
    <group position={position}>
      <mesh rotation={[0, 0, rotation * (Math.PI / 180)]} scale={scale / 50}>
        <meshStandardMaterial color={0xfcba03} roughness={0.3} metalness={1} />
        <coneGeometry args={[2.5, 8]} />
      </mesh>
      <mesh rotation={[0, 0, 90 * (Math.PI / 180)]} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={onClick}>
        <meshStandardMaterial color={0xfcba03} roughness={0.3} metalness={1} transparent={true} opacity={hovered ? 0.3 : 0.4} />
        <capsuleGeometry args={[scale / 12, scale / 12]} />
      </mesh>
    </group>
  )
}

function Learn({ selectedPosition, size }) {
  const fontSize = Math.min(Math.max(size.width / 20, 40), 70)
  const maxWidth = size.width / 1.1

  return (
    <animated.group position={selectedPosition.to((v) => [-v + size.width, 0, 0])}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={fontSize} textAlign="center" font="./GothamLight.otf">
        Terra Classic is About Stability
      </Text>
      <SwapMachine />
    </animated.group>
  )
}

function Community({ selectedPosition, size }) {
  const fontSize = Math.min(Math.max(size.width / 20, 40), 70)
  const maxWidth = size.width / 1.1

  return (
    <animated.group position={selectedPosition.to((v) => [-v + size.width * 2, 0, 0])}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={fontSize} textAlign="center" font="./GothamLight.otf">
        A Wonderful Community
      </Text>
      <Terrarium />
      <LuncAcademy />
    </animated.group>
  )
}

function LuncAcademy() {
  return (
    <group position={[200, 0, 0]}>
      <mesh>
        <sphereGeometry args={[130, 32, 32]} />
        <meshStandardMaterial color={"darkorange"} transparent={true} opacity={0.4} />
      </mesh>
      <Text position={[0, -175, 0]} color="white" fontSize={40} textAlign="center" font="./GothamLight.otf">
        Lunc Academy
      </Text>
    </group>
  )
}

function Ecosystem({ selectedPosition, size }) {
  const fontSize = Math.min(Math.max(size.width / 20, 40), 70)
  const maxWidth = size.width / 1.1

  return (
    <animated.group position={selectedPosition.to((v) => [-v + size.width * 3, 0, 0])}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={fontSize} textAlign="center" font="./GothamLight.otf">
        And an Amazing Ecosystem
      </Text>
    </animated.group>
  )
}
