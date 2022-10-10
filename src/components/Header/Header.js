import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
           <div>
        <section class="container">
                <nav class="navbar navbar-expand bg-light">
                    <div class="container-fluid">
                        <h1>Mega Quiz</h1>
                        <div class="d-flex justify-content-center">
                        <button class="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle
                            navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/subject'>Subject</Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/statistics'>Statistics</Link>
                                </li>
                                <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/question'>Extra-Qus</Link>
                                </li>
                                
                                <li class="nav-item">
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