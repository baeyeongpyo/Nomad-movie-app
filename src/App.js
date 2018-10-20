import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {
    greeting: "Hello!",
    movieData: [
      {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      },
      {
        title: "Full metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
      },
      {
        title: "Star Wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movieData:[
          ...this.state.movieData,
            {
              title: "Trainspotting",
              poster: "https://pmcvariety.files.wordpress.com/2015/12/rexfeatures_1661889a-e1449278924296.jpg?w=1000&h=563&crop=1"
            }
          ]
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
          {this.state.movieData.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}
      </div>
    );
  }
}

export default App;
