import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">

                <Link to="/" class="navbar-brand">Welcome to my portfolio</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link-active px-3" >Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/about" class="nav-link-active px-3" >About</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link to="/project" class="nav-link-active px-3" >Project</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/contact" class="nav-link-active px-3" >Contact</Link>
                        </li>
                    
                    </ul>
                
                </div>

            </div>
        </nav>
    );

}

export default Navbar;