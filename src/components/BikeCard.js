import React, { Component } from 'react';
import propTypes from 'prop-types';
import CardBody from './CardBody';
import ButtonB from './ButtonB';

import GoogleFontLoader from 'react-google-font-loader';


export class BikeCard extends Component {

  setCardStyle = () => {
    return {
      display: 'block',
    float: 'left',
    width: '14rem',
    margin: '1rem',
    fontFamily: 'Montserrat, monospaced',
    paddingBottom: '.5rem'
    }
  }

  getFont = () => {
    return(
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [400, '400i'],
          },
          {
            font: 'Montserrat',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

    )
  }

  

  render() {
    return this.props.bikes.map(bike => (
     
      
      <div className="card rounded-0" key={bike.id.toString()} style={this.setCardStyle()}>

          {/* For adding google font */}
          {this.getFont()}
            
          <CardBody bike={bike}/>
          <ButtonB
                label='Full Specs'
                
          />

      </div>
    ));
  }
}

BikeCard.propTypes = {
  bikes: propTypes.array.isRequired
}


export default BikeCard;
