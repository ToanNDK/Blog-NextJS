import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'About',
    description: 'About page ',
  }

const About = () => {
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src="../images/logo-ai.png" className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info mt-5">
                                                <p><span className="title-s">Name: </span> <span>COMPABLOG</span></p>
                                                <p><span className="title-s">Profile: </span> <span>Fullstack Js Developer</span></p>
                                                <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                                                <p><span className="title-s">Phone: </span> <span>(081) 358-1390</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Skill</p>
                                        <span>HTML</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "85%" }} ></div>
                                        </div>
                                        <span>CSS3</span> <span className="pull-right">75%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} ></div>
                                        </div>
                                        <span>NODEJS</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "85%" }}></div>
                                        </div>
                                        <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ "width": "90%" }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p className="lead">
                                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                            imperdiet et, porttitor
                                            at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                            porttitor accumsan tincidunt.
                                        </p>
                                        <p className="lead">
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Vestibulum
                                            ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                        </p>
                                        <p className="lead">
                                            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                            Nulla porttitor accumsan
                                            tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About