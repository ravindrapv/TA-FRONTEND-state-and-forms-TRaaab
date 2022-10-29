import React, { Component } from 'react'
import data from './data.json'

export default class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            active:null,
        }
    }
  
    handleButton = (props) => {
      this.setState({
        active: props.id
      });
    };
  
    handleHide = () => {
      this.setState({
        active: null
      });
    };
  
    handleDetails = (props) => {
      return (
        <>
          <div className="pop-up">
            <button
              className="hideBtn"
              onClick={() => {
                this.handleHide();
              }}
            >
              X
            </button>
            <div className="slider flex justify-between align-center flex-direction-column flex-wrap-yes">
              {this.props.details.Images.map((item) => {
                return (
                  <>
                    <div className="img-container">
                      <img className="full-width" src={item} alt={item}/>
                    </div>
                  </>
                );
              })}
            </div>
            <h3>{this.props.details.Title}</h3>
            <p>
              Type : {this.props.details.Type ? this.props.details.Type : "N/A"}
            </p>
            <p>
              Release :{" "}
              {this.props.details.Released ? this.props.details.Released : "N/A"}
            </p>
            <p>
              Genres :{" "}
              {this.props.details.Genre ? this.props.details.Genre : "N/A"}
            </p>
            <p>
              Writer :{" "}
              {this.props.details.Writer ? this.props.details.Writer : "N/A"}
            </p>
            <p>
              Director :{" "}
              {this.props.details.Director ? this.props.details.Director : "N/A"}
            </p>
            <p>
              Language :{" "}
              {this.props.details.Language ? this.props.details.Language : "N/A"}
            </p>
            <p>
              Country :{" "}
              {this.props.details.Country ? this.props.details.Country : "N/A"}
            </p>
            <p>
              Actors :{" "}
              {this.props.details.Actors ? this.props.details.Actors : "N/A"}
            </p>
            <p>
              Runtime :{" "}
              {this.props.details.Runtime ? this.props.details.Runtime : "N/A"}
            </p>
            <p style={{ fontStyle: "italic" }}>
              Plot : {this.props.details.Plot}
            </p>
          </div>
        </>
      );
    };

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
            <button onClick={() => this.handleButton(this.movie)} className='btn'>more info</button>
            </ul>
        ))
      }
      {this.state.active === this.props.id
            ? this.handleDetails(this.props)
            : ""}
     </div>
     </>
    )
  }
}

