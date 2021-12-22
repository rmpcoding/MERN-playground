import React from 'react';
import Nav from '../Nav';
import './style.css';

const Header = ({ setPage }) => {

    return (
        <header>
            <h1>Robert Parsons</h1>
            <Nav setPage={setPage} />
        </header>
    );
};

export default Header;
