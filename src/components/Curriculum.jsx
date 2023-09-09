import React, { Component } from "react";
import '../css/Curriculum.css';
import photo from '../img/photo.jpg';
import giesecke from '../img/giesecke.jpg';
import skills from '../img/skills.svg';

export default class Curriculum extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
		const scrollDown = () => {
			document.getElementById("curriculum").scrollTo({
				top: 1000,
				behavior: 'smooth'
			});
		}

        return(
            <div className="curriculum-container" id="curriculum">
                <div className="curriculum">
                    <section>
                        <h1 className="curriculum-title">Mario Antonio Alva Howes</h1>
                        <div className="curriculum-header">
                            <div className="curriculum-header-image">
                                <img src={photo} alt="Mario Antonio Alva Howes" />
                            </div>
                                <div className="curriculum-image-shadow"></div>
                            <div className="curriculum-header-description">
                                <p>
                                I am a <strong>responsible</strong> person, eager to work, seeking to expand my <strong>work experience</strong> while continuing my studies as a <strong>telematic engineer</strong>. I have a <strong>high capacity</strong> for learning in any environment and I <strong>excel in computer</strong> and ICT environments.
                                </p>
								<div onClick={() => scrollDown()} className="curriculum-header-contact">
								Contact me
								</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="curriculum-body-top">
                            <div className="curriculum-experience-titles">
								<div className="curriculum-experience-title">
									<h4>work experience</h4>
								</div>
								<div className="curriculum-experience-title">
									<h4>education</h4>
								</div>
								<div className="curriculum-experience-title">
									<h4>languages</h4>
								</div>
								<div className="curriculum-experience-title">
									<h4>Courses</h4>
								</div>
							</div>
							<div className="curriculum-experience-contents">
								<div className="curriculum-experience-content">
									<img className="curriculum-experience-content-image" src={giesecke} alt="image" />
									<div className="curriculum-experience-content-info">
										<div style={{display: "flex", alignItems: "center"}}>
											<span className="curriculum-experience-content-title">Web Developer</span>
											<span className="curriculum-experience-content-years">- &nbsp;2023 - actual</span>
										</div>
										<p className="curriculum-experience-content-description">
											Frontend and backend development of web applications using HTML, CSS, JavaScript, PHP, MySQL, React, NodeJS, among others.
										</p>
									</div>
									<div className="curriculum-experience-content-skills-container">
										<div className="curriculum-experience-content-skills">
											<img className="curriculum-skills-button" src={skills} alt="skills" />
										</div>
									</div>
								</div>
							</div>
                        </div>
                    </section>
					<section>
						<div className="curriculum-body-bottom">
							
						</div>	
					</section>
                </div>
            </div>
        )
    }
}