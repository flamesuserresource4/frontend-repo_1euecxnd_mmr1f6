import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Html, Float, Text } from '@react-three/drei'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import s from '../components/SceneStyles.module.css'

function DeskScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[4, 6, 4]} angle={0.4} penumbra={0.8} intensity={2} color={'#00bfff'} />
      <spotLight position={[-4, 5, -2]} angle={0.35} penumbra={0.8} intensity={1.2} color={'#ff3c8f'} />
      <Environment preset="city" />
      <Float rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2.4, 0.1, 1.4]} />
          <meshStandardMaterial color="#0b1226" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.9, 0.02, 0.6]} />
          <meshStandardMaterial color="#0e162d" emissive="#00bfff" emissiveIntensity={0.15} />
        </mesh>
        <Text position={[0, 2.2, -0.5]} fontSize={0.28} color="white" anchorX="center" anchorY="middle">
          Hi, I'm M Reza Febrian 👋\nA Programmer & Web Developer who loves backend, API, and AI technology.\nPassionate about turning ideas into code and creating meaningful digital experiences.
        </Text>
      </Float>
    </>
  )
}

export default function About() {
  return (
    <div className={s.pageWrap}>
      <Navbar />
      <div className={s.canvasWrap}>
        <Canvas camera={{ position: [0, 1.6, 4], fov: 55 }}>
          <Suspense fallback={null}>
            <DeskScene />
            <OrbitControls enablePan={false} enableZoom={false} />
          </Suspense>
        </Canvas>
        <div className={s.gradientOverlay} />
      </div>
      <section className={s.hero}>
        <h1 className={s.title}>About</h1>
        <p className={s.subtitle}>A futuristic workspace highlighting focus on Backend, API, and AI</p>
      </section>
    </div>
  )
}
