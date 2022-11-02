import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors:{
                email:"",
                password:"",
            }
        }
    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };


    handelInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors
        this.setState({ [name]: value })

        switch (name) {
            case "email":
               errors.email = this.validateEmail(value) ? "" : "email is not valid"
                break;
                case "password":
                    errors.password = value.length < 6 ? "must contain 6 char" : ""
                     break;
        
            default:
                break;

        }

        this.setState({errors,[name]:value})
    }

    handelSubmit = (event) => {
        event.preventDefault()
        alert(this.state.email + this.state.password)
    }
    render() {
        let {email,password} = this.state.errors
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <div className="card">
                        <form action="">
                            <label htmlFor="user">Username</label>
                            <input type="text" 
                             id='email'
                             name="email"
                             value={this.state.email} 
                             onChange={this.handelInput}
                             placeholder='enter user name'
                             className={email && 'error'}
                              />
                              <span>{email}</span>
                            <label htmlFor="password">password</label>
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handelInput}
                             name="password"
                              id="password"
                              className={password && 'error'}
                               />
                               <span>{password}</span>
                            <input onClick={this.handelSubmit} type="button" value="submit" className='btn' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
