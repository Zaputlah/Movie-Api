import './App.css';
import { getMovielist, searchMovie } from "./api"
import { useEffect, useState } from 'react';



const App = () =>  {
const [popularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    getMovielist().then((result) => {
      setPopularMovie(result)
    })  
  }, [])

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return(
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}></img>
          <div className="Movie-date">Release : {movie.release_date}</div>
          <div className="Movie-rate">Ranting : {movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length > 3 ){
      const query = await searchMovie (q)
      setPopularMovie(query.results)
    }
  //  console.log({ query : query})
  }
  //cara mengetahui/ debuging isi popularMovie
  // console.log({popularMovie: popularMovie})
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zaputlah Movie</h1>
        <input placeholder="Cari Film Favorit anda...." 
        className="Movie-search" 
        onChange={({ target }) => search(target.value)}></input>
        <div className="Movie-container">
          <PopularMovieList></PopularMovieList>
        </div>
      </header>
    </div>
  );
}

export default App;
