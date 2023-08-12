import React from "react";
import { Link } from "react-router-dom";
import Rectangle from '../Image/Rectangle.png';
import Banner from '../Image/Banner.png';


function About() {
    return (
        <>
            <div className="Header ">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
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
                <div className="about-banner">
                    <div className="container d-flex">
                        <div className="about-contant mt-5 col-5">
                            <h1 className="text-danger">BRANDING DO YOU <br />KNOW WHO YOU ARE </h1>
                            <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae perferendis obcaecati odio quibusdam saepe officiis soluta dolores nihil iure est autem architecto, quos nulla.</p>
                        </div>
                        <div className="about-btn ms-5 mt-5 col-5">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <a href="#" class="btn btn-primary border-none active p-2 mb-4 " aria-current="page">DESIGN YOUR MODULS</a>
                                <a href="#" class="btn btn-light border border-primary text-primary p-2">GET DEMO VERSION</a>
                                <a href="#" class="btn text-decoration-underline text-secondary mt-3 ms-5 ps-5 ">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-image mt-5">
                    <div className="container">
                        <div className="row  justify-content-center">
                            <img src={Rectangle} alt="Rectangle" />
                            <img src={Banner} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
