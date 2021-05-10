import React, { useState } from 'react';
import './progress.css';
import logo from '../Intro/digital-marketing.jpeg'; // with import

export default function Progress() {

    return (
        <>
            <section className="container-fluid progress_section">
                <div className="row">
                    <div className="col-lg-3">
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} className="img-top" alt="..." style={{ height: '100px', width: '100px', borderRadius: '50px', textAlign: 'center' }} />
                        </div>
                        <p className="card-text new">100+</p>
                    </div>
                    <div className="col-lg-3">
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} className="img-top" alt="..." style={{ height: '100px', width: '100px', borderRadius: '50px', textAlign: 'center' }} />
                        </div>
                        <p className="card-text new">100+</p>
                    </div>
                    <div className="col-lg-3">
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} className="img-top" alt="..." style={{ height: '100px', width: '100px', borderRadius: '50px', textAlign: 'center' }} />
                        </div>
                        <p className="card-text new">100+</p>
                    </div>
                    <div className="col-lg-3">
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} className="img-top" alt="..." style={{ height: '100px', width: '100px', borderRadius: '50px', textAlign: 'center' }} />
                        </div>
                        <p className="card-text new">100+</p>
                    </div>
                </div>
            </section>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,128L1440,32L1440,0L0,0Z"></path>
            </svg>
        </>
    );
}