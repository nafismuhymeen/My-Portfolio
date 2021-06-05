import React from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Header = () => {
    return (
        <section className="header">
            <h1 data-aos="fade-down" data-aos-duration="1000">Hello, I'm <span>Nafis Muhymeen Tarek</span>.</h1>
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">I'm a MERN stack web developer.</h1>
            <a href="#about" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">
                <button>About Me <i class="fas fa-arrow-right"></i></button>
            </a>
        </section>
    );
};

export default Header;