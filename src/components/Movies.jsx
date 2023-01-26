import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import { Container } from './NavBar'
import '../Styles/Videos.css'
import NoImg from './NoImage.jpg'
import axios from 'axios'
import TrailerMovies from '../Trailers/TrailerMovies'

function Movies() {
    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    const [moviesData, setMoviesData] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState('')
    const shown = input ? 'search' : 'discover'
    const Api = `https://api.themoviedb.org/3/${shown}/movie`
    const Images = 'https://image.tmdb.org/t/p/w500/'
    const MovieCall = async () => {
        const data = await axios.get(Api,{
            params: {
                api_key: 'f94874416b9614402b26ae71dd3336ea',
                query: input
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        setTimeout(() => {
            MovieCall()
        }, 100)
    }, [input])
    const MovieTitle = (movie) => {
        setMovieTitle(movie.title)
        setTrailer(!trailer)
    }
    return (
        <Fragment>
            <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
            <div className='movies-container'>
            {moviesData.map((movie) => {
                return(
                <Fragment>
                    <div id={trailer ? 'container' : 'NoContainer'}>
                    <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => MovieTitle(movie)}/>
                    <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' onClick={() => MovieTitle(movie)}/>
                    <h3 className={toggle ? 'mainColor' : 'secondaryColor'}>{movie.title}</h3>
                    </div>
                </Fragment>                    
                )
            })}
            {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle}/>}
            <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={() => setTrailer(true)} />
            </div>
            </div>
        </Fragment> 
    )
}

export default Movies