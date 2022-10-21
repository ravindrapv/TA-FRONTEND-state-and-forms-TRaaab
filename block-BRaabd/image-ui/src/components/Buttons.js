import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }
  render() {
    let labels = ["basketball", "pubg", "tiger", "phone", "laptop", "cricket"];
    return (
      <>
        <div className="container center">
          <div className="btn">
            {labels.map((label) => (
              <button
                className={this.state.active === label ? "active" : ""}
                onClick={() => {
                  this.setState({
                    active: label,
                  });
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <figure>
            <img
              alt={this.state.active}
              src={`./images/${this.state.active}.jpg`}
            />
          </figure>
        </div>
      </>
    );
  }
}

export default Button;
