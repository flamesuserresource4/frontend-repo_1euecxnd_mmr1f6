import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import s from '../components/SceneStyles.module.css'

export default function Home() {
  return (
    <div className={s.pageWrap}>
      <Navbar />
      <div className={s.canvasWrap}>
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Suspense>
        <div className={s.gradientOverlay} />
      </div>
      <section className={s.hero}>
        <h1 className={s.title}>
          M Reza Febrian
        </h1>
        <p className={s.subtitle}>Programmer & Web Developer — Backend • API • AI</p>
        <div className={s.cta}>
          <Link to="/about" className={s.button}>About</Link>
          <Link to="/projects" className={s.ghostBtn}>Projects</Link>
          <Link to="/contact" className={s.ghostBtn}>Contact</Link>
        </div>
      </section>
    </div>
  )
}
