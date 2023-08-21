import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api"
import './movie.css'


function Movie(){
    const { id } = useParams()
    const navigate = useNavigate()
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
                alert('Filme não encontrado')
                navigate("/", {replace: true})
                return
            })
        }
        loadMovie()

        return () =>{
            console.log('Componente desmontado')
        }
    }, [navigate, id])

    function saveMovie(){
        const myList = localStorage.getItem("@movieflix")
        let movieSaves = JSON.parse(myList) || []

        const hasMovie = movieSaves.some((movieSave)=> movieSave.id === movie.id)

        if (hasMovie){
            alert('Este filme já está na lista!')
            return
        }

        movieSaves.push(movie)
        localStorage.setItem("@movieflix", JSON.stringify(movieSaves))
        alert("Filme adicionado com sucesso!")
    }

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
            <strong>Avaliação: {movie.vote_average.toFixed(1)} de 10</strong>
            <strong>Título original: {movie.original_title}</strong>
            <strong>Data de lançamento: {movie.release_date}</strong>
            <div className="area-button">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title}`}>Trailer</a>
                </button>
            </div>

        </div>

    )
}

export default Movie