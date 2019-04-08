import React, { Component } from 'react';
import propTypes from 'prop-types';

export class BikeColors extends Component {
  render() {
    return this.props.bikeColors.map((color, index) => (
        <div style={{display: 'inline-block', margin:'.1rem'}} key={index}>
            <span className="badge" style={{'backgroundColor': color, padding:'.35rem'}}> </span>
        </div>
    ));
  }
}

BikeColors.propTypes = {
    bikeColors: propTypes.array.isRequired
  }

export default BikeColors;
