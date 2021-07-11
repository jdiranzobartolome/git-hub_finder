import React from 'react'
import PropTypes from 'prop-types';
// Instead of Link, the normal tags "a" could be used but
// using the normal tag a make the states of the components of each route be 
// reseted every time you change routes. With Link, the states are 
// not reseted, so use Link. 
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon} />
                    {title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps ={
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
