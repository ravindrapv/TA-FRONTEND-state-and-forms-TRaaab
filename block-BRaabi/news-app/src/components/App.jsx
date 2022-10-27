import React from 'react'
import News from './News'
import '../styles/index.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='center'>News</h1>
        <News />
      </div>
    )
  }
}



