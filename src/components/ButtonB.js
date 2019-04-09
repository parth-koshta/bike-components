import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import propTypes from 'prop-types';
export class ButtonB extends Component {
 
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
         <Button className="btn btn-success">
          {this.props.label}
        </Button>
      </div>
    )
  }
}

ButtonB.propTypes = {
  label: propTypes.string.isRequired
}

export default ButtonB;
