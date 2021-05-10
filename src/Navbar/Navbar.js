import React, { useState } from 'react';

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0099ff' }} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight: '5%'}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav classNameNameName="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0099ff" }} >
                        <div classNameNameName="container-fluid">
                            <a classNameNameName="navbar-brand" href="#">Navbar</a>
                            <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span classNameNameName="navbar-toggler-icon"></span>
                            </button>
                            <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link" href="#">Progress</a>
                                    </li>
                                    <li classNameName="nav-item">
                                        <a classNameName="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> */}
        </>
    );
}