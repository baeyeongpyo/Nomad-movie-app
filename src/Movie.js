import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css'

Movie.PropTypes ={
        title : PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
}

MoviePoster.PropTypes ={
    poster : PropTypes.string.isRequired
}

function Movie({title, poster}){
    return(
        <div>
        <h1>{title}</h1>
        <MoviePoster poster={poster}/>
        </div>
    );
}

function MoviePoster({poster}){
    return(
        <img class="posterImg" src={poster} alt=""/>
    )
}


export default Movie;
