import React, { useState } from 'react';
import "./App.css";
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Whywe from '../whyWe/Whywe';
import Client from '../WhatClientsSay/Client';
import Progress from '../Progress/progress';
import LatestBlog from '../LatestBlog/latestBlog';
import Footer from '../Footer/Footer';

export default function AboutSection() {

  return (
    <>
      <Navbar />
      <section className="container-fluid about_us_section" style={{ padding: '11% 11%', height: '110px', background: '#0099ff' }}>
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '3rem' }}>About Us</h1>
        <br />
        <p style={{ textAlign: 'center', color: 'white' }}>Home About us</p>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,213.3C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>
      <Intro />
      <Whywe />
      <Client />
      <Progress />
      <LatestBlog />
      <Footer />
    </>
  );
}