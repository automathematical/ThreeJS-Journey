import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { DepthOfField, Bloom, Noise, EffectComposer, Glitch, Vignette } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction } from 'postprocessing'
import Drunk from './Drunk.jsx'
import { useControls } from 'leva'

export default function Experience() {
  const drunkProps = useControls('Drunk Effect', {
    frequency: { value: 2, min: 1, max: 20 },
    amplitude: { value: 0.1, min: 0, max: 1 },
  })
  return (
    <>
      <color
        args={['#ffffff']}
        attach={'background'}
      />
      <EffectComposer multisampling={8}>
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}
        {/* <Glitch
          delay={[0.5, 1]}
          duration={[0.1, 0.3]}
          strength={[0.02, 0.04]}
          mode={GlitchMode.CONSTANT_WILD}
        /> */}
        {/* <Noise
          premultiply
          blendFunction={BlendFunction.AVERAGE}
        /> */}
        {/* <Bloom
          mipmapBlur
          intensity={0.1}
          luminanceThreshold={0}
        /> */}
        {/* <DepthOfField /> */}
        <Drunk
          {...drunkProps}
          blendFunction={BlendFunction.DARKEN}
        />
      </EffectComposer>

      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      <mesh
        castShadow
        position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        castShadow
        position-x={2}
        scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial
          color="purple"
          toneMapped={false}
        />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}
