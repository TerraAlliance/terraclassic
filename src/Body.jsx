import { useEffect } from "react"
import { useSpringValue } from "@react-spring/three"

import { state } from "./state"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Community from "./pages/Community"
import Ecosystem from "./pages/Ecosystem"

export default function Body() {
  const scroll = state.scroll.use()
  const scrollspring = useSpringValue(0, { config: { mass: 1, friction: 30, tension: 2000, clamp: false } })
  useEffect(() => {
    scrollspring.start(scroll)
  }, [scroll])

  return (
    <>
      <ambientLight />
      <pointLight decay={0} intensity={18} position={[0, 0, 10000]} />
      <Navbar scrollspring={scrollspring} />
      <Home scrollspring={scrollspring} />
      <Learn scrollspring={scrollspring} />
      <Community scrollspring={scrollspring} />
      <Ecosystem scrollspring={scrollspring} />
    </>
  )
}
