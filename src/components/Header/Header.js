import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
           <div>
        <section className="container">
                <nav className="navbar navbar-expand bg-light">
                    <div className="container-fluid">
                        <h1>Mega Quiz</h1>
                        <div className="d-flex justify-content-center">
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle
                            navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/topic'>Topic</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/statistics'>Statistics</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/blog'>Blog</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
                                </li>
                            </ul>
                               
                        </div>
                    </div>
                        
                </div>
</nav>
        </section>
    </div>
        
    );
};

export default Header;