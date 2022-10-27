import React, { Component } from "react";

export default class News extends Component {
  constructor(props){
    super()
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
          <div className="btn border-x-lime-300 center">open state</div>
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
        </div>
      </div>
    );
  }
}
