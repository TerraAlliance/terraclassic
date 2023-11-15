export default function SwapMachine() {
  return (
    <>
      <Stablecoin />
      <Collateral />
      <mesh position={[0, 0, 0]} rotation-z={90 * (Math.PI / 180)}>
        <cylinderGeometry args={[15, 15, 100, 32]} />
        <meshStandardMaterial color={"white"} transparent={true} opacity={0.3} />
      </mesh>
      <mesh position={[25, 0, 0]} rotation-z={90 * (Math.PI / 180)}>
        <cylinderGeometry args={[15, 15, 50, 32, 1, false, Math.PI, Math.PI]} />
        <meshStandardMaterial color={0xfcba03} roughness={0.3} metalness={1} transparent={true} opacity={1} />
      </mesh>
      <mesh position={[-25, 0, 0]} rotation-z={90 * (Math.PI / 180)}>
        <cylinderGeometry args={[15, 15, 50, 32, 1, false, Math.PI, Math.PI]} />
        <meshStandardMaterial color={"blue"} roughness={0.3} metalness={1} transparent={true} opacity={1} />
      </mesh>
    </>
  )
}

function Collateral() {
  return (
    <group position={[175, 0, 0]}>
      <mesh>
        <sphereGeometry args={[130, 64, 32]} />
        <meshStandardMaterial color={"darkorange"} transparent={true} opacity={0.5} />
      </mesh>
      <mesh rotation-x={180 * (Math.PI / 180)}>
        <sphereGeometry args={[130, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color={0xfcba03} roughness={0.3} metalness={1} transparent={true} opacity={1} />
      </mesh>
    </group>
  )
}

function Stablecoin() {
  return (
    <group position={[-175, 0, 0]}>
      <mesh>
        <sphereGeometry args={[130, 32, 32]} />
        <meshStandardMaterial color={"blue"} transparent={true} opacity={0.2} />
      </mesh>
      <mesh rotation-x={180 * (Math.PI / 180)}>
        <sphereGeometry args={[130, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color={"blue"} roughness={0.3} metalness={1} transparent={true} opacity={1} />
      </mesh>
    </group>
  )
}
