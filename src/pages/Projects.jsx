import { Canvas } from '@react-three/fiber'
import { Environment, Float, Html } from '@react-three/drei'
import Navbar from '../components/Navbar'
import s from '../components/SceneStyles.module.css'

function Frame({ title = 'Project', color = '#00bfff', position = [0,0,0] }) {
  return (
    <group position={position}>
      <Float floatIntensity={1} rotationIntensity={0.4}>
        <mesh>
          <boxGeometry args={[1.6, 1, 0.08]} />
          <meshStandardMaterial color={'#0e152b'} emissive={color} emissiveIntensity={0.12} />
        </mesh>
        <mesh position={[0,0,0.05]}>
          <planeGeometry args={[1.4, 0.8]} />
          <meshStandardMaterial color={'#11193a'} />
        </mesh>
        <Html position={[0,0,0.06]} center>
          <div style={{ width: 180, textAlign: 'center', color: 'white', fontFamily: 'Poppins', fontWeight: 600 }}>{title}</div>
        </Html>
      </Float>
    </group>
  )
}

function Gallery() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 6, 3]} intensity={2} angle={0.4} penumbra={0.8} color={'#00bfff'} />
      <spotLight position={[-5, 4, -3]} intensity={1.4} angle={0.35} penumbra={0.8} color={'#ff3c8f'} />
      <Environment preset="night" />
      <Frame title="RESTful API" color="#00bfff" position={[-2, 1.2, 0]} />
      <Frame title="Admin Dashboard" color="#ff3c8f" position={[0, 1.2, 0]} />
      <Frame title="AI Tools" color="#7c3aed" position={[2, 1.2, 0]} />
    </>
  )
}

export default function Projects() {
  return (
    <div className={s.pageWrap}>
      <Navbar />
      <div className={s.canvasWrap}>
        <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
          <Gallery />
        </Canvas>
        <div className={s.gradientOverlay} />
      </div>
      <section className={s.hero}>
        <h1 className={s.title}>Projects</h1>
        <p className={s.subtitle}>Interactive 3D gallery with subtle neon glows</p>
      </section>
    </div>
  )
}
