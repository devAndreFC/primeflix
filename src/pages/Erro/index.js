import { Link } from "react-router-dom"
import './erro.css'


function Erro(){
    return(
        <div className="not-found">
            <h1>404 - Página não encontrada...</h1>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro