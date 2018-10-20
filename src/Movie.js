import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css'
import { prototype } from 'stream';

Movie.PropTypes ={
        title : PropTypes.string.isRequired,
        poster: PropTypes.string
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
        <img src={poster} height="300px" width="200px"/>
    )
}


export default Movie;
