import React from 'react';
import './NavLinks.styles.css';
import {NavLink} from "react-router-dom";


const NavLinks = props => (
    <ul className='nav-links'>
        <li>
            <NavLink exact to='/'>All USERS</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY PLACE</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>ADD PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
    </ul>
);

export default NavLinks;
