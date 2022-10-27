import React, { Component } from "react";
import faqs from '../accordian/data.json'

export default class News extends Component {
  constructor(){
    super() 
    this.state = {
      activeIndex:null,
    }
  }
  render() {
    return (
      <div className="container">
        <div className="box border">
          <div className="btn border-x-lime-300 center">closed state</div>
          <ui className="center">
            <div className="flex p-4 m-3 border justify-between">
              <li>javascript</li>
              <li>click</li>
            </div>
            <div className="flex p-4 m-3 border justify-between">
              <li>node</li>
              <li>click</li>
            </div>
            <div className="flex p-4 m-3 border justify-between">
              <li>React</li>
              <li>click</li>
            </div>
          </ui>
          <hr />
          <div className="btn border-x-lime-300 center">AltCampus FAQS</div>
          <ui className="center">
            <div>
              {
                faqs.map((faq,index) =>(
                  <>
                  <li>
                  <h2 className=" bg-slate-100" onClick={() => {
                    this.setState({activeIndex:index})
                  }}><hr />
                    {faq.Q}</h2>
                  {index === this.state.activeIndex && <p>{faq.A}</p>}
                  </li>
                  </>
                ) )
              }
            </div>
          </ui>
        </div>
      </div>
    );
  }
}
