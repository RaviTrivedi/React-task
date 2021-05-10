import React, { useState } from 'react';
import './latestBlog.css';
import logo from '../Intro/digital-marketing.jpeg'; // with import

export default function LatestBlog() {

    return (
        <>
            <section className="container-fluid" style={{marginTop: '3%'}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 style={{ textAlign: 'center' }}>Latest Blog</h1>
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