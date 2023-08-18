// URL base: https://api.themoviedb.org/3/
// URL da api: /movie/now_playing?api_key=e979a948e0b39f84a12c2ab3e3f0972e&language=pt-BR

import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api