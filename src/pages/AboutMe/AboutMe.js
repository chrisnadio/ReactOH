import React from 'react';
import foto from '../../assets/images/myfoto.JPG';
import cahaya from '../../assets/images/cahaya.jpg';
import garansi from '../../assets/images/garansi3.jpeg';
import mvp from '../../assets/images/mvp.png';
import topbrand from '../../assets/images/topbrand.jpeg';
import iso from '../../assets/images/iso.jpeg';
import '../../assets/css/aboutme.css';
import {Button} from 'antd';

const AboutMe = () => {
    return (
    <>
        <div ClassName="top">
            <h2>Curriculum Vitae</h2>
        </div>

        <div ClassName="header">
            <img src={cahaya} id='cahaya' alt='cahaya'/>
        </div>

        <div className="navbar">
            <a href="https://www.linkedin.com/in/fabianus-chrisna-dio-040a47192/?originalSubdomain=id">LinkedIn</a>
            <a href="https://github.com/chrisnadio">GitHub</a>
            <a href="https://gitlab.com/chrisnadio">GitLab</a>
            <a href="https://twitter.com/12FC_Dio">Twitter</a>
        </div>

   
        <div className="side">
                <h1>F Chrisna Dio</h1>
                <h2>Address:</h2>
                <p>Street Raya Bogor Km.24. Pasar Rebo, East Jakarta</p>
            <div ClassName="fotoprofil">
                <img src={foto} id='foto' alt='foto'/>
            </div>
        </div>

        <div ClassName="main">
            <div ClassName="main-skills">
                    <h2>Skills</h2>
                <div ClassName="paragraf">
                    <p>HTML5, CSS3, JavaScript, Git, ReactJS</p>
                </div>
            </div>
    
            <div ClassName="main-archive">     
                <h2>Archivement</h2>
                    <div ClassName="container">
                        <div ClassName="icon-archive">
                            <img src={mvp} id='foto' alt='foto'/>      
                            <img src={garansi} id='foto' alt='foto'/>   
                            <img src={topbrand} id='foto' alt='foto'/> 
                            <img src={iso} id='foto' alt='foto'/>
                        </div>
                    </div>       
            </div>

             <div ClassName="main-hobby">
                <h2>Hobby</h2>
                <p>Travelling</p>
            </div>
        </div>


        <div ClassName="footer">
            <Button>HIRE ME!</Button>
                <div ClassName="infooter">
                    <h2>@Copyright 2020. F Chrisna Dio</h2>
                </div>
        </div>
    </>
    );
};

export default AboutMe;