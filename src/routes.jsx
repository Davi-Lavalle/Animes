import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import Home from './pages/Home'
import Favoritos from './pages/Favorito'
import Informacoes from './pages/informacao'
import Page404 from './pages/Page404'
import { ContextProvider } from './context'
import RolarParaTopo from './components/RolarParaTopo'

function AppRoutes() {
    return (
        <>
        <ContextProvider>
            <BrowserRouter>
                <RolarParaTopo />
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/favorito" element={<Favoritos />} ></Route>
                    <Route path="/informacao/:id" element={<Informacoes />} ></Route>
                    <Route path="*" element={<Page404 />} ></Route>
                </Routes>
            </BrowserRouter>   
        </ContextProvider>
    </>
    )
}

export default AppRoutes