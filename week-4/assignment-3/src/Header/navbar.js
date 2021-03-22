import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props =>
    <li>
        <a href={props.link}>{props.title}</a>
    </li>

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Navbar;