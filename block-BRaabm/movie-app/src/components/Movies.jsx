import React, { Component } from 'react'
import data from './data.json'

export default class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeIndex:"",
        }
    }
  handelChange = (movie) => {
    this.setState({
        activeIndex:movie,
    })
  }
  render() {
    let movieData = data.map(movie => movie)
    console.log(movieData);
    return (
     <>
     <div className='flex '>
      {
        movieData.map((movie) => (
            <ul className='movie-card'> 
            <img src={movie.Images} alt="movieData" />
            <h1>{movie.Title}</h1>
            <h2>{movie.Released}</h2>
            <button onClick={() => this.handelChange(movie)} className='btn'>more info</button>
            </ul>
        ))
      }
     </div>
     </>
    )
  }
}

