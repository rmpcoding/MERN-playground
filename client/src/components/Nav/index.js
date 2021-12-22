import React from 'react';
import './style.css';

const Nav = ({ setPage }) => {
    const handleClick = (e) => {
        setPage(e.target.value);
    };
    return (
        <nav>
            <button onClick={handleClick} value="About Me">
                About Me
            </button>
            <button onClick={handleClick} value="Portfolio">
                Portfolio
            </button>
            <button onClick={handleClick} value="Users">
                Users
            </button>
            <button onClick={handleClick} value="ClassH1">
                ClassH1
            </button>
        </nav>
    );
};

export default Nav;
