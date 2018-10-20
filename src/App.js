import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {}

  componentDidMount(){
    this._getMovies();

    

  }

  _runderMovies = () => {
    const movieData = this.state.movieData.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
        })
      return movieData
  }

  _getMovies = async () => {
  const movieData = await this._callAPI()
  this.setState({
    movieData
  })
}

_callAPI = () => {
  return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  .then(response => response.json())
  .then(response => response.data.movies)
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
         {this.state.movieData ? this._runderMovies() : 'Loading~'}
      </div>
    );
  }
}

export default App;
