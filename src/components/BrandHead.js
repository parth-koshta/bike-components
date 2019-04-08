import React, { Component } from 'react';

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


export default BrandHead;
