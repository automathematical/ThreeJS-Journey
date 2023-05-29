export default function Experience() {
  return (
    <>
      <mesh
        rotation-y={Math.PI * 0.25}
        position-x={3}
        scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>
      <mesh
        rotation-y={Math.PI * 0.25}
        position-x={-3}
        scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh
        position-y={1}
        rotation-x={Math.PI * 0.5}
        scale={10}>
        <planeGeometry />
        <meshBasicMaterial color={'green'} />
      </mesh>
    </>
  )
}
