import React, { Component } from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
            <FontAwesomeIcon icon={faBicycle} /> {this.props.title}
            </a>
            </nav>
      </div>
    );
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired
}

export default Header;
