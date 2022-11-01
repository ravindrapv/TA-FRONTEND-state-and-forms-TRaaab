import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
            <div className="card">
                <form action="">
                    <label htmlFor="user">Username</label>
                    <input type="text" id='user' value='user' placeholder='enter user name' />
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                    <input type="button" value="submit" className='btn' />
                </form>
            </div>
        </div>
      </div>
    )
  }
}
