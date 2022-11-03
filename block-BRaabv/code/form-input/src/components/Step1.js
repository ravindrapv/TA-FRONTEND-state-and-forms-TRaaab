import React, { Component } from 'react'

export default class Step1 extends Component {
    constructor(){
        super()
        this.state = {
            active:""
        }
    }
  render() {
    return (
      <>
       <div className="center-card flex flex-shrink flex-wrap">
        <figure className='flex-20'>
        <img src="../images/g5.jpg" alt="" />
        </figure>
        <form action="">
          <label htmlFor="fname">first name</label>
          <input type="text" name="fname" id="text" placeholder='enter your name' />
          <label htmlFor="lname">last name</label>
          <input type="text" name="lname" id="lname" placeholder='enter your name' />
          <label htmlFor="DOB">date of birth</label>
          <input type="date" name="DOB" id="DOB"  />
          <label htmlFor="email">email</label>
          <input type="email" name='email' placeholder='enter your email' />
          <input type="submit" value="Submit" />
        </form>
       </div>
       <div>
       
       </div>
      </>
    )
  }
}
