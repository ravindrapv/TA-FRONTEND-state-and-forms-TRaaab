import React, { Component } from 'react'
import data from './data.json'


export default class MoviInfo extends Component {
  render() {
    let Data = data.map(Movi => Movi);

    return (
      <>
      <h1 className='header'>Movie detailes</h1>
       <div className='movie-display'>
       {
            Data.map((m) => (
                <nav>
                    <ul>{m.Poster}</ul>
                    <li>{m.Actors}</li>
                    <li>{m.Awards}</li>
                    <li>{m.Country}</li>
                </nav>
            ))
        }
       </div>
      </>
    )
  }
}
