import React, { Component } from 'react';
import propTypes from 'prop-types';

export class BikeImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl} className="card-img-top" alt='Bikes'/>
      </div>
    )
  }
}

BikeImage.propTypes = {
  imgUrl: propTypes.string.isRequired
}

export default BikeImage;
