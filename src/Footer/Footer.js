import React, { useState } from 'react';
import './footer.css';
import logo from '../Intro/digital-marketing.jpeg'; // with import

export default function Footer() {

    return (
        <>
            <section className="container-fluid footer_section">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 style={{ color: 'yellow' }}>Company</h1>
                        <p className="card-text footer_content" style={{ color: 'white' }}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="col-lg-3">
                        <h4 style={{ color: 'yellow', marginTop: '2%' }}>Information</h4>
                        <p className="card-text footer_content">About Us</p>
                        <p className="card-text footer_content">Our Team</p>
                        <p className="card-text footer_content">Our Price</p>
                        <p className="card-text footer_content">Services</p>
                    </div>
                    <div className="col-lg-4">
                        <h4 style={{ color: 'yellow', marginTop: '2%' }}>Newsletter</h4>
                        <p className="card-text footer_content">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </section>
        </>
    );
}