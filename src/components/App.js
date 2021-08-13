
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' } 
    ]
  }

  render() {

    const newVact = this.cityList.filter((el)=>{
      return el.country == "India"
    })
    return (
      <div id="main">
        <ol>
          {newVact.map((fcity,index)=>{
            return <li key={"location" + (index+1)}>{fcity.name}</li>
          })}
        </ol>
      </div>
    )
  }
}


export default App;
