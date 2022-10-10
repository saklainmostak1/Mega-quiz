import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/subject'>Subject</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/question'>Extra-Qus</Link>
               
            </nav>
        
    );
};

export default Header;