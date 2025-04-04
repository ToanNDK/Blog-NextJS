import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact page',
}

const Contact = () => {
    return (
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                Send Message Us
                                            </h5>
                                        </div>
                                        <div>
                                            <form action="" method="post" role="form" className="contactForm">
                                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                                <div id="errormessage"></div>
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">
                                                Get in Touch
                                            </h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                                expedita aperiam aliquid at.
                                                Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                                mollitia inventore?
                                            </p>
                                            <ul className="list-ico">
                                                <li><i className='fa fa-map'></i> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                                <li><i className="fa fa-phone" aria-hidden="true"></i> (617) 557-0089</li>
                                                <li><i className="fa fa-envelope" aria-hidden="true"></i> contact@example.com</li>
                                            </ul>
                                        </div>
                                        <div className="socials">
                                            <ul>
                                                <li><a href=""><span className="ico-circle"><i className="fa fa-facebook" aria-hidden="true"></i></span></a></li>
                                                <li><a href=""><span className="ico-circle"><i className="fa fa-instagram" aria-hidden="true"></i></span></a></li>
                                                <li><a href=""><span className="ico-circle"><i className="fa fa-twitter"></i></span></a></li>
                                                <li><a href=""><span className="ico-circle"><i className="fa fa-pinterest"></i></span></a></li>
                                            </ul>
                                        </div>
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

export default Contact