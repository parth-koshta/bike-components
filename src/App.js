import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BikeCard from './components/BikeCard';



class App extends Component {
  

  state = {
    bikes: [
      {
        id: 1,
        brand: 'state',
        bikeName: 'warhawk',
        price: 299,
        colors: ['blue', 'red', 'green', 'black', 'yellow', 'pink'],
        quantity: 0,
        imgUrl: '/images/cycle_sample.png'
      },
      {
        id: 2,
        brand: 'state',
        bikeName: 'cardinal',
        price: 499,
        colors: ['blue', 'red', 'green', 'black'],
        quantity: 2,
        imgUrl: '/images/cycle_sample.png'
      },
      {
        id: 3,
        brand: 'state',
        bikeName: 'warhawk',
        price: 299,
        colors: ['blue', 'red', 'brown', 'black'],
        quantity: 0,
        imgUrl: '/images/cycle_sample.png'
      },
      {
        id: 4,
        brand: 'state',
        bikeName: 'cardinal',
        price: 499,
        colors: ['blue', 'purple', 'green'],
        quantity: 9,
        imgUrl: '/images/cycle_sample.png'
      },
      {
        id: 5,
        brand: 'state',
        bikeName: 'warhawk',
        price: 299,
        colors: ['blue', 'red'],
        quantity: 10,
        imgUrl: '/images/cycle_sample.png'
      },
      {
        id: 6,
        brand: 'state',
        bikeName: 'cardinal',
        price: 499,
        colors: ['blue', 'red', 'orange'],
        quantity: 2,
        imgUrl: '/images/cycle_sample.png'
      }
    ]
  }


  render(){
    
    return (

      <div className="App">
        <Header 
        title='Bike Stock'
        />
        <BikeCard bikes={this.state.bikes} style={{ fontFamily: 'Roboto Mono, monospaced' }}/>
        
        
      </div>
    );
  }
}

export default App;
