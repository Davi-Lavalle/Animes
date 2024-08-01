import Card from '../../components/Card'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import { user } from '../../context';
import styles from './Favorito.module.css'

function Favoritos() {
    const {favoritos} = user()

    return (
        <>
           <Header/>
            <Container>
            <section className={styles.home}>
                    <h2>Favoritos</h2>
                    {
                        favoritos.length > 0 ? (
                            <section className={styles.lista}>
                                {
                                    favoritos.map(ani => (
                                        <Card
                                        key={ani.id}
                                        ani={ani}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <p>Nenhum item favoritado</p>
                        )
                    }

                </section>
            
        
            </Container>
        <Footer/>

        </>
    )
}

export default Favoritos