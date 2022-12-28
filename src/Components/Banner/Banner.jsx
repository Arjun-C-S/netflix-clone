import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res.data.results[0]);
      setMovie(res.data.results[4]);
    })
  }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">
            {movie ? movie.title : 'movie title'}
        </h1>
        <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
            <h1 className="description">
                {movie ? movie.overview : "description"}
            </h1>
            <div className="fade_bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Banner
