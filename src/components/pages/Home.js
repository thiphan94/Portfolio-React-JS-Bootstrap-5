import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="title">Welcome to my portfolio!</h3>
                            <div className="underline mx-auto"></div>
                            <p>As my personal project for learning React, I chose to create my own personal portfolio with React JS and Bootstrap 5</p>
                            <Link to="/about" className="btn btn-dark shadow">Read more</Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        
    );

}

export default Home;