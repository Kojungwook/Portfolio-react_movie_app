import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/TrailerMovie.css'

function TrailerTvShows({TvShowsTitle}) {
    const [video, setVideo] = useState('')
    const [videoURL, setVideoURL] = useState('')
    function handleSearch() {
        setVideo(TvShowsTitle)
        movieTrailer(video).then((res) => {
            setVideoURL(res)
        })
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
    return (
        <Fragment>
            <div className='Container'>
            </div> 
            <div className='player'>
                <ReactPlayer url={videoURL} controls={true} width={'700px'} height={'480px'} muted={false} />
            </div>
        </Fragment>
    )
}

export default TrailerTvShows