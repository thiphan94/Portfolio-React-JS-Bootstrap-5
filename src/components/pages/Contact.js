import React from 'react';

function Contact(){
    return (
        <div>
            <section className="section" >
                <div className="container">
                    <div class="row" >  
                        <div class="col-md-4" id="box">
                            <h2>Contact Me!</h2>
                        
                            <div class="form-group">

                                <div class="col-md-12">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <input name="first_name" placeholder="Your Name" class="form-control" type="text"></input>
                                    </div>
                                </div>
                            </div>
                             
                            <div class="form-group">

                                <div class="col-md-12">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                        <input name="email" placeholder="Mail" class="form-control" type="text"></input>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">

                                <div class="col-md-12">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                                        <input name="phone" placeholder="+33xxxxxxxxx" class="form-control" type="text"></input>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">

                                <div class="col-md-12 inputGroupContainer">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                                        <textarea class="form-control" name="comment" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">

                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-dark shadow pull-right">Send <span class="glyphicon glyphicon-send"></span></button>
                                </div>
                            </div>       
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Contact;