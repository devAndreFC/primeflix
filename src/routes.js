import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Movie from './pages/Movie'
import Home from './pages/Home'
import Header from './components/Header'
import Erro from './pages/Erro'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/filme/:id' element={ <Movie/>}/>

                <Route path="*" element={ <Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp