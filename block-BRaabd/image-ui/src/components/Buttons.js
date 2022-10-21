import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "",
    };
  }
  handelBall = () => {
    return (
      <>
        <figure className="container">
          <img src="/assets/basketball.jpg" alt="ball"/>

        </figure>
      </>
    );
  };
  render() {
    return (
      <>
        <div className="container">
          <button className="btn" onClick={this.state.handelBall}>
            Basketball
          </button>
          <button className="btn">pubG</button>
          <button className="btn">tiger</button>
          <button className="btn">phone</button>
          <button className="btn">laptop</button>
          <button className="btn">cricte</button>
        </div>
      </>
    );
  }
}

export default Button;
