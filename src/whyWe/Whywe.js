import React, { useState } from 'react';
import './whywe.css';
import logo from '../Intro/digital-marketing.jpeg'; // with import

export default function Whywe() {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 270">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,208C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <section className="container-fluid" style={{ backgroundColor: '#0099ff' }}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 style={{ color: 'yellow', textAlign: 'center' }}>Why Choose Us</h1>
                        <p style={{ color: 'white', textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        <br /> Lorem Ipsum has been </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid whywe_section">
                <div className="row">
                    <div className="col-lg-4 content">
                        <div>
                            <h3>High Quelity Services</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                        </div>
                        <div>
                            <h3>High Quelity Services</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                        </div>
                    </div>
                    <div className="col-lg-4 img">
                        <img src={logo} style={{ height: '250px', width: '330px' }} />
                    </div>
                    <div className="col-lg-4 content">
                        <div>
                            <h3>Innovative Solutions</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                        </div>
                        <div>
                            <h3>Innovative Solutions</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}