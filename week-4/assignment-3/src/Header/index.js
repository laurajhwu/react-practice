import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar'

const Header = props =>
    <header>
        <nav>
            <div id="website-title">
                <img src="images/logo.png" alt="logo" id="logo" />
                <h1>NIGHTGRAM</h1>
            </div>

            <ul className="main-nav">
                <button className="exit-btn">X</button>
                {props.navigation.map(navbar => {
                    return (
                        <Navbar
                            title={navbar.title}
                            link={navbar.link}
                            key={navbar.id} />
                    )
                })}
            </ul>
            <img src="images/hamburger.png" id="hamburger" alt="hamburger" />
        </nav>
    </header>

Header.propTypes = {
    navigation: PropTypes.array.isRequired
}

export default Header;