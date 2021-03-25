import React from 'react';


function About(){
    return (
        <div>
            <body id="About">
            <section className="section" >
                
                    <div className="container">  
                        <div class="row">
                        <div class="col-lg-7 mx-auto">
                                <ul class="timeline">
                                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                        <div class="timeline-arrow"></div>
                                        <h2 class="h5 mb-0" style={{ backgroundColor: 'grey' }}>University Paris 8 Vincennes – Saint-Denis</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2020-2021</span>
                                        <h6 class="text-small mt-2 font-weight-light">Bachelor of Embedded System </h6>
                                        <p>Courses: Microprogramming, Android development, iOS development, Microchip PIC, Java</p>
                                    </li>
                                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                        <div class="timeline-arrow"></div>
                                        <h2 class="h5 mb-0" style={{ backgroundColor: 'grey' }}>Université de Bretagne Occidental </h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2018-2020</span>
                                        <h6 class="text-small mt-2 font-weight-light">Second year of bachelor of Computer Science</h6>
                                        <p>Courses: Algorithm, C, Computer Architecture, Python, Semantic Web, SQL </p>
                                        <h6 class="text-small mt-2 font-weight-light">First year of bachelor of Computer Science</h6>
                                        <p>Courses: Algorithm, Electronic, OpenGL, Bash, RobotC, Ocaml </p>
                                    </li>
                                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                        <div class="timeline-arrow"></div>
                                        <h2 class="h5 mb-0" style={{ backgroundColor: 'grey' }}>University of Caen Normandy</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2013-2016</span>
                                        <h6 class="text-small mt-2 font-weight-light">Bachelor of education</h6>
                                    </li>

                                </ul>
                             </div>
                        </div>
                    </div>
                
            </section>
            </body>
        </div>
        
    );

}


export default About;