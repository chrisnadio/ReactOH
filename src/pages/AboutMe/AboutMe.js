import React from 'react';
import '../../assets/css/aboutme.css';

const AboutMe = () => {
    return (
<div>
    <div ClassName="top">
        <h2>Curriculum Vitae</h2>
    </div>

    <div ClassName="header">
        {/* <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\cahaya.jpg" style="width:1350px;height:400px;"> */}
    </div>

    <div className="navbar">
        {/* <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">GitLab</a>
        <a href="#">Twitter</a> */}
    </div>

    <div className="row">
        <div className="side">
                <h1>F Chrisna Dio</h1>
                <h2>Address:</h2>
                <p>Street Raya Bogor Km.24. Pasar Rebo, East Jakarta</p>
            <div ClassName="fotoprofil">
                {/* <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\myfoto.jpg"> */}
            </div>
        </div>

        <div ClassName="main">
            <div ClassName="main-skills">
                    <h2>Skills</h2>
                <div ClassName="paragraf">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>Git</p>
                    <p>SDLC</p>
                </div>
            </div>
    
    <div ClassName="main-archive">     
            <h2>Archivement</h2>
        <div ClassName="container">
            <div ClassName="icon-archive">
                {/* <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\mvp.png" style="width:180px; height:170px;">      
                <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\garansi3.jpeg" style="width:175px;  height:170px;">   
                <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\topbrand.jpeg" style="width:175px; height:170px;"> 
                <img src="D:\Dio\Glints\Project Pribadi\Biodata\images\iso.jpeg" style="width:183px; height:170px;"> */}
            </div>
        </div>       
    </div>

    <div ClassName="main-hobby">
        <h2>Hobby</h2>
        {/* <p style="height:200px;">Under Maintenance</p> */}
    </div>
  </div>
  </div>


<div ClassName="footer">
    <button ClassName="button">HIRE ME!</button>
  <div ClassName="infooter">
        <h2>@Copyright 2020</h2>
        <h3>F Chrisna Dio</h3>
  </div>
</div>
</div>


    );
};

export default AboutMe;