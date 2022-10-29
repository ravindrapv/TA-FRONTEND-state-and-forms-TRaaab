import React, { Component } from 'react'

export default class Fonts extends Component {
    constructor(props){
        super()
        this.state = {
            messageText:'',
        }
    }
    handelChange = (event) => {
        this.setState({
            messageText:event.target.value
        })
    } 

    handelClick = () => {
        console.log(this.state.messageText);
    }

  render() {
    return (
      <div className="container">
        <div className='center'>Fonts</div>
        <div className="flex">
        <input onChange={this.handelChange} type="text" placeholder='enter a name' />
        <button onClick={this.handelClick} className='btn'>Submit</button>
        </div>
        <div className="flex">
        <p className='textarea'>{this.state.messageText}</p>
        <p className='textarea'>{this.state.messageText}</p>
        <p className='textarea'>{this.state.messageText}</p>
        <p className='textarea'>{this.state.messageText}</p>
        
        </div>
      </div>
    )
  }
}
