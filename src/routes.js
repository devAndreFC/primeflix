import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Movie from './pages/Movie'
import Home from './pages/Home'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/filme/:id' element={ <Movie/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp