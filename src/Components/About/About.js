import React from 'react';
import './About.css';
import myImg from './circle-cropped (1)-min.png';
import resume from './Nafis Muhymeen Tarek CL & Resume (1).pdf'

const About = () => {
    return (
        <section className="about" id="about">
            <br />
            <div><h1>About</h1></div>
            <br />
            <br />
            <div>
                <div>
                    <img src={myImg} alt="Nafis Muhymeen Tarek" />
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem animi soluta expedita eos minus exercitationem error ipsam repellendus modi sed eius eligendi reiciendis, magnam neque possimus nostrum non accusantium veniam ut? Laboriosam necessitatibus quasi magni nesciunt architecto quidem sapiente esse voluptatibus qui. Natus eligendi non enim esse repellat sed doloribus quas possimus fugit! Consectetur magnam libero modi corporis pariatur excepturi harum nisi, quos molestias iste aspernatur amet ea. Iure voluptates molestiae, corporis a earum repudiandae asperiores pariatur, in aspernatur dicta qui. Eveniet reiciendis excepturi maxime dolorum quisquam deserunt expedita inventore fugit molestias tenetur veniam ipsum sapiente delectus culpa, eaque maiores in commodi accusamus recusandae officiis et. Odit iure repellendus corporis repudiandae temporibus ea obcaecati, cupiditate beatae sint adipisci odio esse tempore corrupti eligendi quae facilis laborum a optio iste molestiae, fuga aut. Ad est asperiores quis neque fugit reiciendis obcaecati non deserunt labore assumenda nihil deleniti quaerat voluptas reprehenderit quia, eos minus animi debitis. Voluptate at, magni doloremque blanditiis rerum quod ullam eum, alias temporibus in voluptas quasi distinctio! At natus laudantium voluptate magnam repellendus soluta voluptas saepe hic aspernatur neque deserunt corporis consectetur dolorum iusto obcaecati atque officia, quaerat quasi. Soluta ipsam suscipit dicta, aliquam unde explicabo architecto. Aliquam.</p>
                    <br />
                    <a href={resume} download><button>Download Resume</button></a>
                </div>
                
            </div>
        </section>
    );
};

export default About;