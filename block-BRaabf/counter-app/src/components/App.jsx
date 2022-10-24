import React from "react";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
  }
  incriment = () => {
    this.setState({
     counter:this.state.counter + 1
    })
  }
  decriment = () => {
    this.setState({
     counter:this.state.counter - 1
    })
  }
  reset = () => {
    this.setState({
     counter:0
    })
  }
  render(){
    return (
    <>  
      <div className="container flex-center">
      <div className="center">{this.state.counter}</div>
        <div className="flex">
        <button className="btn" onClick={this.incriment}>incriment</button>
        <button className="btn" onClick={this.decriment}>decriment</button>
        <button className="btn" onClick={this.reset}>reset</button>
        </div>
      </div>
    </>
    )
  }
}

export default App;
