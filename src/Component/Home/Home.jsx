import React from "react";
import { Link } from "react-router-dom";
import Placeholder from '../Image/Placeholder.png';
import { Twitter , Linkedin , Google } from 'react-bootstrap-icons';
import './Home.css';

function Header() {
    return (
        <>
            <div className="Header  bg-primary text-light">
                <nav class="navbar navbar-expand-lg bg-primary ">
                    <div className="container ">
                        <div class="container-fluid d-flex">
                            <div className="name">
                                <a class="navbar-brand" href="#">Gravity</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <ul class="navbar-nav  me-auto  mb-2 mb-lg-0">
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
                <div className="banner">
                    <div className="container d-flex">
                        <div className="contant col-6">
                            <p className="mt-5 ">SHOOTING STARS </p>
                            <h1>THE AMAZING HUBBLE</h1>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur obcaecati alias labore ipsa officia odit ea architecto eligendi aliquid dolore assumenda, doloribus sunt doloremque, mollitia, quae dolor omnis ex sapiente. Mollitia vero deserunt quae, ullam tempora, veniam consequatur optio ad nam fuga illum voluptates eligendi vitae molestias hic. Enim, repudiandae.</p>
                            <div class="btn-group mb-5">
                                <a href="#" class="btn btn-light border-none active text-primary me-4" aria-current="page">GET STARTED</a>
                                <a href="#" class="btn btn-primary border border-light">LEARN MORE</a>
                            </div>
                            <div className="mt-3 mb-5 ">
                                <Twitter className="m-3"/>
                                <Linkedin className="m-3"/>
                                <Google className="m-3"/>
                            </div>
                        </div>
                        <div className="banner-image col-6">
                            <img src={Placeholder} alt="Placeholder" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
