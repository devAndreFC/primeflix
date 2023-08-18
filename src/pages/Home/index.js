import { useEffect, useState } from "react"
import api from '../../services/api'
import { Link } from "react-router-dom"
import './home.css'
// /movie/now_playing?api_key=e979a948e0b39f84a12c2ab3e3f0972e&language=pt-BR

function Home(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: 'e979a948e0b39f84a12c2ab3e3f0972e',
                    language: 'pt-BR',
                    page: 1
                }
            })
            // console.log(response.data.results.slice(0, 10))
            setMovies(response.data.results.slice(0, 10))
        }
        loadMovies()
    }, [])

    return(
        <div className="container">
            <h1>Bem vindo a Home</h1>
            <div className="list-movies">
                {movies.map((movie)=>{
                    return(
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="{movie.title}"/>
                            <Link to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home