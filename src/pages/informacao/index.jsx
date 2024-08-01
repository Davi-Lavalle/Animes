import React from 'react';
import { useParams } from 'react-router-dom';
import { user } from '../../context';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './informacao.module.css'

function Informacoes() {
    const { id } = useParams();
    const { infor } = user();

    const anime = infor.find(anime => anime.id === parseInt(id));

    if (!anime) {
        return null;
    }

    return (
        <>
        <Header/>
        <Container>
            <section className={styles.Informacao}>
                <h1>{anime.titulo}</h1>
                <div className={styles.sinopse}>
                    <h2 className={styles.sinopseT}>Sinopse:</h2>
                    <p >{anime.sinopse}</p>
                </div>
                <div className={styles.criador}>
                    <h2>Criador:</h2>
                    <p>{anime.criador}</p>
                </div>
                <div className={styles.criador}>
                    <h2>Protagonista:</h2>
                    <p>{anime.Protagonista}</p>
                    <img src={anime.imgProtagonista} alt="" />
                </div>
                <div className={styles.criador}>
                    <h2>Data de lançamento:</h2>
                    <p>{anime.lacamento}</p>
                </div>
                <div className={styles.criador}>
                    <h2>Número de episódio: </h2>
                    <p>{anime.episodios}</p>
                </div>
                <div className={styles.criador}>
                    <h2>Avaliação: </h2>
                    <p>{anime.avaliacao}</p>
                </div>
            </section>
            
        
            </Container>
        <Footer/>
            
        </>
        
    );
}

export default Informacoes;
