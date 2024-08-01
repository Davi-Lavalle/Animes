import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'
import Container from '../../components/Container'
import Inf from '../informacao'


function Home(){
    const [ animes, setAnimes] = useState([])

    useEffect(() => {
        const buscarAnimes = async () => {
            try{
                const response = await fetch('/animes.json')
                const data = await response.json()

                const sortAvalicao = data.sort((a,b) => b.avaliacao - a.avaliacao)
                setAnimes(sortAvalicao)
            }catch (error){
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        buscarAnimes()
    }, [])

    return(
        <>
        <Header/>
        <Container>
            <section className={styles.home}>
                    <h2>Animes</h2>
                    {
                        animes.length > 0 ? (
                            <section className={styles.lista}>
                                {
                                    animes.map(ani => (
                                        <Card
                                        key={ani.id}
                                        ani={ani}
                                        />
                                        
                                        
                                        
                                    ))
                                }

{
                                    animes.map(ani => (
                                        <Inf
                                        key={ani.id}
                                        ani={ani}
                                        />
                                        
                                        
                                        
                                    ))
                                }



                            </section>
                        ) : (
                            <p>Carregando repositórios</p>
                        )
                    }

                </section>
            
        
            </Container>
        <Footer/>
            
        </>
    )
}
export default Home