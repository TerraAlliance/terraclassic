import { useRef } from "react"
import { Shape } from "three"
import { Text, Extrude } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const arcShape = new Shape()
arcShape.moveTo(0, 0.75)
arcShape.bezierCurveTo(1, 0.4, 1, -0.4, 0, -0.75)
arcShape.bezierCurveTo(-1, -0.4, -1, 0.4, 0, 0.75)

export default function Terrarium() {
  const plant = useRef()

  useFrame((state, delta) => {
    plant.current.rotation.y += delta * 0.5
  })

  return (
    <group position={[-200, 0, 0]}>
      <mesh>
        <sphereGeometry args={[130, 32, 32]} />
        <meshStandardMaterial color={"white"} transparent={true} opacity={0.2} />
      </mesh>
      <mesh rotation-x={180 * (Math.PI / 180)}>
        <sphereGeometry args={[130, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshStandardMaterial color={"saddlebrown"} roughness={1} metalness={0.6} />
      </mesh>

      <group ref={plant}>
        <mesh position={[0, 0, 0]} rotation-z={180 * (Math.PI / 180)}>
          <cylinderGeometry args={[4, 4, 85, 32]} />
          <meshStandardMaterial color={"green"} roughness={0} metalness={0.3} />
        </mesh>
        <Extrude position={[-30, 55, 10]} rotation={[45 * (Math.PI / 180), 0, 45 * (Math.PI / 180)]} scale={50} args={[arcShape, { curveSegments: 48, steps: 1, depth: 0.1, bevelEnabled: false }]}>
          <meshStandardMaterial color={"green"} roughness={0} metalness={0.3} />
        </Extrude>
        <Extrude position={[30, 25, -20]} rotation={[45 * (Math.PI / 180), 0, -135 * (Math.PI / 180)]} scale={50} args={[arcShape, { curveSegments: 48, steps: 1, depth: 0.1, bevelEnabled: false }]}>
          <meshStandardMaterial color={"green"} roughness={0} metalness={0.3} />
        </Extrude>
      </group>

      <Text position={[0, -175, 0]} color="white" fontSize={40} textAlign="center" font="./GothamLight.otf">
        Terrarium
      </Text>
    </group>
  )
}
