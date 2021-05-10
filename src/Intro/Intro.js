import React, { useState } from 'react';
import './intro.css';
import logo from './digital-marketing.jpeg'; // with import

export default function Intro() {

    return (
        <>
            <section className="container-fluid intro_section">
                <div className="row">
                    <div className="col-lg-6 content">
                        <h1>Digital Agency</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div class="alert alert-primary" role="alert">
                            A simple primary alert—check it out!
                        </div>
                    </div>
                    <div className="col-lg-6 img">
                        <img src={logo} style={{ height: '350px', width: '550px' }} />
                    </div>
                </div>
            </section>
        </>
    );
}