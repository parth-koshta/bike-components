import React, { Component } from 'react';
import BikeColors from './BikeColors';
import BrandHead from './BrandHead';
import BikeImage from './BikeImage';
import propTypes from 'prop-types';


export class CardBody extends Component {
    getQuantity = () => {
        if(this.props.bike.quantity === 0) {
            return 'N/A';
        }
        return(
            this.props.bike.quantity
            );
    }

    

    
  render() {
    const { imgUrl, price, colors} = this.props.bike;
    return (
      <div>
        <div className="card-body">
            <BikeImage imgUrl={imgUrl}/>
            <BrandHead label={this.props.bike.brand}/>
            <BrandHead
            label={this.props.bike.bikeName}
            />
            <hr />
            <div>Price: ${price}</div>
            <hr />
            <div>
                Colors: <BikeColors bikeColors={colors} />
            </div>
            <hr />    
            <p>In Stock: {this.getQuantity()}</p>
            </div> 
            
      </div>
    )
  }
}

CardBody.propTypes = {
    bike: propTypes.object.isRequired
  }

export default CardBody;
