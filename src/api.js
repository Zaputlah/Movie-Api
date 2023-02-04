import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovielist = async() => {
    const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
    ) 
    // cara debuging
    // console.log({movelist: movie})
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
        ) 
    return search.data
}

