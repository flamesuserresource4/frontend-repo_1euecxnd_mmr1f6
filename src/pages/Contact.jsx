import { Canvas } from '@react-three/fiber'
import { Environment, Float, Text } from '@react-three/drei'
import Navbar from '../components/Navbar'
import s from '../components/SceneStyles.module.css'

function HoloPanel({ position=[0,0,0] }) {
  return (
    <group position={position}>
      <Float floatIntensity={1}>
        <mesh>
          <boxGeometry args={[2.6, 1.6, 0.08]} />
          <meshStandardMaterial color={'#0e152b'} emissive={'#00bfff'} emissiveIntensity={0.15} />
        </mesh>
        <Text position={[0,0.4,0.06]} fontSize={0.18} color={'white'} anchorX="center" anchorY="middle" font="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrJJLmy96E.woff2">
          Contact
        </Text>
        <Text position={[0,0.1,0.06]} fontSize={0.12} color={'#bfe9ff'} anchorX="center" anchorY="middle">
          Email: mr.rezaa765@gmail.com
        </Text>
        <Text position={[0,-0.1,0.06]} fontSize={0.12} color={'#ffb3d1'} anchorX="center" anchorY="middle">
          GitHub: @rezafebriansyah_19
        </Text>
        <Text position={[0,-0.3,0.06]} fontSize={0.12} color={'#c4b5fd'} anchorX="center" anchorY="middle">
          LinkedIn: M Reza Febrian
        </Text>
        <Text position={[0,-0.5,0.06]} fontSize={0.12} color={'#a7f3d0'} anchorX="center" anchorY="middle">
          Instagram: reza_fullstack
        </Text>
      </Float>
    </group>
  )
}

export default function Contact() {
  return (
    <div className={s.pageWrap}>
      <Navbar />
      <div className={s.canvasWrap}>
        <Canvas camera={{ position: [0, 1.6, 4], fov: 55 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[4, 6, 4]} intensity={2} angle={0.4} penumbra={0.8} color={'#00bfff'} />
          <Environment preset="night" />
          <HoloPanel position={[0, 1.4, 0]} />
        </Canvas>
        <div className={s.gradientOverlay} />
      </div>
      <section className={s.hero}>
        <h1 className={s.title}>Contact</h1>
        <p className={s.subtitle}>Reach out via email or socials — rendered as a hologram</p>
      </section>
    </div>
  )
}
