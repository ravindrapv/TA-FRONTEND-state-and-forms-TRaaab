import React, { Component } from 'react'
import data from './data.json'

export default class Tags extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTag:""
        }
    }

    handelClick = (category) => {
        this.setState({
            activeTag:category,
        })
    }
  render() {
    let dataTag = data.map(tag => tag.category);
    let AllData = data.reduce((acc,card) => {
        acc = acc.concat(card.all)
        return acc;
    },[])
    console.log(AllData);

    return (
      <div className=' container'>
        <nav className=' flex justify-center m-4'>
            <ul className=' flex gap-3 text-center'>
                {
                    dataTag.map((category) => (
                        <li key={category} onClick={() => this.handelClick(category)} className={
                            category === this.state.activeTag ? "active" : "btn"
                        }>{category}</li>
                    ))
                }
            </ul>
        </nav>
        <div className="container">
         <ul className='flex flex-wrap flex-1 justify-center'>
            {
                AllData.map((menu) =>{
                    return(
                        <div className="card">
                        <div className="flex">
                          <img src={menu.img} alt="iteam-1" />
                          <div className=" flex justify-between">
                            <h2>{menu.title}</h2>
                            <small>{menu.price}</small>
                          </div>
                        </div>
                        <p>
                         {menu.desc}
                        </p>
                      </div>
                    )
                })
            }
         </ul>
        </div>
      </div>
    )
  }
}
