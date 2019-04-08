import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
            <FontAwesomeIcon icon={faBicycle} /> Bikes
            </a>
            </nav>
      </div>
    );
  }
}

export default Header;
