import React from 'react';
import './Socialbar.css'
const Socialbar = () => {
    return (
        <section className="social-bar">
            <a href="https://www.facebook.com/nafis.muhymeen.7" target="blank"><i class="fab fa-facebook-square"></i> </a>
            <a href="mailto:muhymeennafis@gmail.com" target="blank"><i class="fas fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/nafis-muhymeen-tarek/" target="blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/nafismuhymeen" target="blank"><i class="fab fa-github-square"></i></a>
        </section>
    );
};

export default Socialbar;