import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import './movie.css'


function Movie(){
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'e979a948e0b39f84a12c2ab3e3f0972e',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setMovie(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('filme nao encontrado')
            })
        }
        loadMovie()

        return () =>{
            console.log('Componente desmontado')
        }
    }, [])

    if (loading){
        return(
            <div className="movie-info"> 
                <h1>Carregando filme...</h1>
            </div>
        )
     }

    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}></img>
            <h3>Sinopse</h3>
            <span>{movie.overview}</span>
            <strong>Avaliação: {movie.vote_average} / 10</strong>
            <div className="area-button">
                <button>Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>

        </div>

    )
}

export default Movie