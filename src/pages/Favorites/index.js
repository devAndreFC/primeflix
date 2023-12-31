import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import './favorites.css'
import { Link } from 'react-router-dom'

function Favorites(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@movieflix")
        setMovies(JSON.parse(myList) || [])
    }, [])

    function deleteMovie(id){
        let filterMovies = movies.filter((item)=>{
            return(item.id != id)
        })
        setMovies(filterMovies)
        localStorage.setItem("@movieflix", JSON.stringify(filterMovies))
        toast.success(`Filme excluído com sucesso!`)

    }

    return(
        <div className='my-movies'>
            <h1>Meus filmes</h1>

            {movies.length === 0 && <span>Você não possui filmes salvos.</span>}
            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=> deleteMovie(item.id)}>Excluir</button>
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites