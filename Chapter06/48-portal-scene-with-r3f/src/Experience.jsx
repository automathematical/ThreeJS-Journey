import { shaderMaterial, Sparkles, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/Fragment.glsl'

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#000000'),
    uColorEnd: new THREE.Color('#ffffff'),
  },
  portalVertexShader,
  portalFragmentShader
)

extend({ PortalMaterial })

export default function Experience() {
  const { nodes } = useGLTF('./model/portal.glb')

  const bakedTexture = useTexture('./model/baked.jpg')
  bakedTexture.flipY = false

  const portalMaterial = useRef()

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta
  })

  return (
    <>
      <color
        args={['#030202']}
        attach="background"
      />

      <OrbitControls makeDefault />
      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}>
          <meshBasicMaterial color={'#ffffe5'} />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}>
          <meshBasicMaterial color={'#ffffe5'} />
        </mesh>
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}>
          <portalMaterial ref={portalMaterial} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  )
}
