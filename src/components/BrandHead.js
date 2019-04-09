import React, { Component } from 'react';
import propTypes from 'prop-types';
export class BrandHead extends Component {

setStyle = () => {
    return{
        textTransform: 'uppercase'
    }
}

   

  render() {
    return (
      <div style={this.setStyle()}>
        <h5 className="card-title">{this.props.label}</h5>
      </div>
    )
  }
}

BrandHead.propTypes = {
  label: propTypes.string.isRequired
}
export default BrandHead;
