import './header.css'
import { Link } from 'react-router-dom'


function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Movie Flix</Link>
            <Link className='about' to='/sobre'>Sobre o site</Link>
            <Link className='favorites' to='/favoritos'>Meus Filmes</Link>
        </header>
    )
}

export default Header