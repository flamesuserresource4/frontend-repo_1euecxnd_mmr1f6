import { Link } from 'react-router-dom'
import s from '../components/SceneStyles.module.css'

export default function NotFound() {
  return (
    <div className={s.pageWrap} style={{ display: 'grid', placeItems: 'center' }}>
      <div style={{ textAlign: 'center', padding: 24 }}>
        <h1 className={s.title}>404</h1>
        <p className={s.subtitle}>Halaman tidak ditemukan</p>
        <Link to="/" className={s.button} style={{ display: 'inline-block', marginTop: 16 }}>Kembali</Link>
      </div>
    </div>
  )
}
