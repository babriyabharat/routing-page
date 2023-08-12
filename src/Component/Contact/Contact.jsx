import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Google } from 'react-bootstrap-icons';
import Cbanner from '../Image/Cbanner.png';
import './Contact.css';

function Contact() {
    return (
        <>
            <div className="Header ">
                <nav class="navbar navbar-expand-lg navbar-light bg-light d-">
                    <div className="container ">
                        <div class="container-fluid d-flex">
                            <div className="name">
                                <a class="navbar-brand" href="#">Gravity</a>
                            </div>
                            <div class="collapse navbar-collapse d-flex justify-content-end">
                                <ul class="navbar-nav me-auto  mb-2 mb-lg-0">
                                    <Link to="/" class="nav-item text-decoration-none">
                                        <a class="nav-link active" href="#">Home</a>
                                    </Link>
                                    <Link to="/About" class="nav-item text-decoration-none">
                                        <a class="nav-link" href="#">About</a>
                                    </Link>
                                    <Link to="/Contact" class="nav-item dropdown text-decoration-none">
                                        <a class="nav-link" href="#">Contact</a>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="contact-banner">
                    <div className="container">
                        <div className="row">
                            <div className="contant col-8">
                                <div className="mt-5 mb-5 ">
                                    <Twitter className="m-3" />
                                    <Linkedin className="m-3" />
                                    <Google className="m-3" />
                                </div>
                                <div className="mt-5 text">
                                    <h1>Vampires The <br /> Romantic Ideology <br /> Behind Them</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Officia molestias officiis consequuntur ea <br />omnis porro architecto corrupti maiores</p>
                                </div>
                                <div className="btn">
                                    <button type="button" class="btn btn-primary mt-5 px-4">GET STRATED</button>
                                </div>
                            </div>
                            <div className="contact-image col-4" >
                                <img src={Cbanner} alt="Cbanner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
