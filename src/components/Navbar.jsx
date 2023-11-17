import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"
import { animated } from "@react-spring/three"

import { state } from "../state"

export default function Navbar({ scrollspring }) {
  const windowsize = useWindowSize()
  const width = Math.min(windowsize.width - 75, 700)

  return (
    <>
      <Bar windowsize={windowsize} width={width} />
      <Selected windowsize={windowsize} width={width} scrollspring={scrollspring} />
      <Buttons windowsize={windowsize} width={width} />
    </>
  )
}

function Bar({ windowsize, width }) {
  return (
    <mesh position={[0, windowsize.height / 2 - 50, 0]} rotation-z={90 * (Math.PI / 180)}>
      <capsuleGeometry args={[Math.min(windowsize.width / 20, 25), width, 5, 20]} />
      <meshStandardMaterial color={"black"} transparent="true" opacity={0.6} depthWrite={false} />
    </mesh>
  )
}

function Selected({ windowsize, width, scrollspring }) {
  return (
    <animated.mesh position={scrollspring.to((v) => [(width - width / 7) / -2 + v * ((width - width / 7) / 20), windowsize.height / 2 - 50, 0])} rotation-z={90 * (Math.PI / 180)}>
      <capsuleGeometry args={[Math.min(windowsize.width / 20, 25), width / 7, 5, 20]} />
      <meshStandardMaterial roughness={0.3} metalness={1} color={0xfcba03} transparent="true" opacity={1} depthWrite={false} />
    </animated.mesh>
  )
}

function Buttons({ windowsize, width }) {
  const fontSize = Math.min(windowsize.width / 40, 20)
  const scroll = state.scroll.use()

  return (
    <>
      <Text position={[(width - width / 7) / -2, windowsize.height / 2 - 50, 0]} color={scroll === 0 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Home
      </Text>
      <Text position={[(width - width / 7) / -4, windowsize.height / 2 - 50, 0]} color={scroll === 5 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Learn
      </Text>
      <Text position={[0, windowsize.height / 2 - 50, 0]} color={scroll === 10 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Ecosystem
      </Text>
      <Text position={[(width - width / 7) / 4, windowsize.height / 2 - 50, 0]} color={scroll === 15 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Community
      </Text>
      <Text position={[(width - width / 7) / 2, windowsize.height / 2 - 50, 0]} color={scroll === 20 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Build
      </Text>
    </>
  )
}
