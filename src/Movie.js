import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoster />
            <h1>Hello This is Movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="http://mblogthumb4.phinf.naver.net/20131027_207/hunger_game_1382880069756IQfR6_JPEG/0.jpg?type=w2"/>
        );
    }
}


export default Movie;
