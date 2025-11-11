import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.dot} />
        <span>M Reza Febrian</span>
      </div>
      <div className={styles.links}>
        <NavLink to="/" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Contact</NavLink>
      </div>
    </nav>
  )
}
