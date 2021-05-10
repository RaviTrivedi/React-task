import React, { useState } from 'react';
import './clients.css';
import logo from '../Intro/digital-marketing.jpeg'; // with import

export default function Client() {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,213.3C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
            <section className="container-fluid" style={{marginTop: '3%'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 style={{ textAlign: 'center' }}>What Clients Say</h1>
                        <p style={{ textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br /> Lorem Ipsum has been </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid clients_section">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}