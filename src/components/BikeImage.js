import React, { Component } from 'react'

export class BikeImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl} className="card-img-top" alt='Bikes'/>
      </div>
    )
  }
}

export default BikeImage
