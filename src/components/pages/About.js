import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';


function About(){
    return (
        <div>
            <section className="section">
                <div className="container">
                <div class="row">
            <div class="col-lg-7 mx-auto">
                
                
                <ul class="timeline">
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Université Paris 8 Vincennes – Saint-Denis</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2020-2021</span>
                        <h6 class="text-small mt-2 font-weight-light">Licence Micro-Informatique et Machines Embarquées </h6>
                        <p>Cours: Microprogramme, Développement Android, Développement iOS, Microchip PIC, Java</p>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Université de Bretagne Occidental </h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2018-2020</span>
                        <h6 class="text-small mt-2 font-weight-light">Licence 2 Informatique</h6>
                        <p>Cours: Algorithme, C, Architecture, Python, Web sémantique, SQL </p>
                        <h6 class="text-small mt-2 font-weight-light">Licence 1 Science de l’ingénieur parcours Informatique</h6>
                        <p>Cours: Algorithme, Electronique, OpenGL, Bash, RobotC, Ocaml </p>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Université de Caen Normandie</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2013-2016</span>
                        <h6 class="text-small mt-2 font-weight-light">Licence Sciences de l’éducation : 
parcours des métiers de l’enseignement</h6>
                    </li>
                </ul>

            </div>
        </div>
                </div>
            </section>
        </div>
        
    );


}

export default About;