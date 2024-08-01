import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/LOGO_ANIME.png" alt="" />
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorito">Favoritos</Link>
            </nav>
        </header>
    )    
}

export default Header
