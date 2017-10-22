import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkBox from './LinkBox';
import './Nav.css';

const Nav = (props) => (
    <nav { ...props }>
        <ul>
            <li><NavLink exact activeClassName='active' to='/'><LinkBox>Home</LinkBox></NavLink></li>
            <li><NavLink activeClassName='active' to='/1'>First page</NavLink></li>
            <li><NavLink activeClassName='active' to='/2'>The second one</NavLink></li>
            <li><NavLink activeClassName='active' to='/3'>Number three</NavLink></li>
        </ul>
    </nav>
);

export default Nav;