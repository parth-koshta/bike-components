import React, { Component } from 'react';

export class Button extends Component {
    
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <button
         className="btn btn-success"
         >
         {this.props.label}

         </button>
      </div>
    )
  }
}

export default Button;
