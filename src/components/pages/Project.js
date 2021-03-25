import React from 'react';
import Image6 from '../images/game.png';
import Image1 from '../images/img1.jpg';
import Image2 from '../images/money.png';
import Image3 from '../images/p1.png';
import Image3s from '../images/p2.PNG';
import Image4 from '../images/adobe.PNG';
import Image5 from '../images/sign.png';
import {Link} from 'react-router-dom';


function Project(){
    return (
        <div>
            <section className="section" >
                <div className="container">  
                    <div class="row" >
                        <div class="col-md-12 mb-4 text-center">
                            <h3 className="title">MY PROJECTS</h3>  
                            <div className="underline mx-auto"></div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="card shadow">
                                <img src={Image1} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>RASPBERRY PI HOME SECURITY SYSTEM - PYTHON</h6>
                                    <div className="underline"></div>
                                    <p>Facial recognition and fingerprint system with Raspberry Pi 4B</p>
                                    <p>Control electronic door strike, send notifications to mail of user </p>
                                    <a href="https://github.com/thiphan94/Face-Recognition-Raspberry-Pi" >Link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="card shadow ">
                                <img src={Image2} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>MONEY BALANCE - KOTLIN, FIREBASE</h6>
                                    <div className="underline"></div>
                                    <p>Budget App for Android</p>
                                    <p>To get started you need to connect your account for checking your savings, credits and debits</p>
                                    <a href="https://github.com/thiphan94/Application-Kotlin-Money-Balance" >Link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="card shadow">
                                <img src={Image3} class="d-block w-100 border-bottom" alt="..."/>
                                &nbsp;
                                <img src={Image3s} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>MY PORTFOLIO (2 versions)</h6>
                                    <div className="underline"></div>
                                    <p>Personal page for my informations</p>
                                    <p>Version with HTML, CSS, JavaScript</p>
                                    <p>Version with React.js et Bootstrap 5</p>
                                    <a href="https://github.com/thiphan94/Portfolio_HTML_CSS_JavaScript" >Link</a>
                                    &nbsp;
                                    <a href="https://github.com/thiphan94/Portfolio-React.js-Bootstrap5" >Link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                        &nbsp;
                            <div class="card shadow">
                                <img src={Image4} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>UX/UI DESIGN - ADOBE XD, FIGMA</h6>
                                    <div className="underline"></div>
                                    <p>Selection of form templates with Adobe XD et Figma</p>
                                    <a href="https://github.com/thiphan94/UX-UI-Design" >Link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                        &nbsp;
                            <div class="card shadow">
                                <img src={Image5} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>MINI PROJETCS - ANGULAR, FIREBASE</h6>
                                    <div className="underline"></div>
                                    <p>Sign in / Sign up Form, Todo List</p>
                                    <a href="https://github.com/thiphan94/Angular-Firebase-Authentication" >Link</a>
                                    &nbsp;
                                    <a href="https://github.com/thiphan94/Angular-Todolist" >Link</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-stretch">
                        &nbsp;
                            <div class="card shadow">
                                <img src={Image6} class="d-block w-100 border-bottom" alt="..."/>
                                <div className="card-body">
                                    <h6>SPACE INVADERS - PYTHON</h6>
                                    <div className="underline"></div>
                                    <p>Game "Space Invaders" with the library Tkinter</p>
                                    <a href="https://github.com/thiphan94/Space_Invaders" >Link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>    
            </section>
        </div>
    );

}

export default Project;