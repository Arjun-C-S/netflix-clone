import React , { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] = useState('');
   useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log(res.data);
      setMovies(res.data.results)
    }).catch((err) => {
      // console.log(err);
    })
   })
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      if(res.data.results.length !== 0 ) {
        setUrlId(res.data.results[0]);
      } else {
        console.log('empty array');
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj) => 
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
          )
        }
      </div>
      {
        urlId && <Youtube videoId={urlId.key} opts={opts}/>
      }
    </div>
  )
}

export default RowPost
