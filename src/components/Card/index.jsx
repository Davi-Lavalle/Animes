import styles from './Card.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { user } from '../../context';

function Card({ ani }) {
    const { favoritos, addFavorito, removeFavorito, addInf } = user();
    const isFavorito = favoritos.some(fav => fav.id === ani.id);

    const handleClick = () => {
        if (isFavorito) {
            removeFavorito(ani.id);
        } else {
            addFavorito(ani);
        }
    };

    return (
        <section className={styles.card}>
            <div className={styles.animeT}><h3>{ani.titulo}</h3></div>
            <img src={ani.imagem} alt={ani.titulo} />
            <div className={styles.card_footer}>
                <button onClick={handleClick} className={styles.botao1}>
                    {isFavorito ? <FaHeart /> : <CiHeart />}
                </button>
                <Link to={`/informacao/${ani.id}`} onClick={() => addInf(ani)} className={styles.botao2}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}

export default Card;
