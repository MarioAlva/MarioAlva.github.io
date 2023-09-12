import React, { Component } from "react";
import '../css/Curriculum.css';
import photo from '../img/photo.jpg';
import email from '../img/email.svg';
import phone from '../img/phone.svg';
import linkedin from '../img/linkedin.svg';
import whatsapp from '../img/whatsapp.svg';
import instagram from '../img/instagram.svg';
import ExperienceCard from "./ExperienceCard";

export default class Curriculum extends Component{
    constructor(props){
        super(props);
        this.state = {
			menu: 0,
        }
    }
    render(){
		const scrollDown = () => {
			document.getElementById("curriculum").scrollTo({
				top: 2000,
				behavior: 'smooth'
			});
		}

        return(
            <div className="curriculum-container" id="curriculum">
                <div className="curriculum">
                    <h1 className="curriculum-title">Mario Antonio Alva Howes</h1>
                    <section className="curriculum-header">
                        <div className="curriculum-header-image">
                            <img src={photo} alt="Mario Antonio Alva Howes" />
                        </div>
                            <div className="curriculum-image-shadow"></div>
                        <div className="curriculum-header-description">
                            <p>
                            I am a <strong>responsible</strong> person, eager to work, seeking to expand my <strong>work experience</strong> while continuing my studies as a <strong>telematic engineer</strong>. I have a <strong>high capacity</strong> for learning in any environment and I <strong>excel in computer</strong> and ICT environments. <br />
                            <span className="curriculum-birthday">15/12/1999</span>
							</p>
							<div onClick={() => scrollDown()} className="curriculum-header-contact">
							Contact me
							</div>
                        </div>
                    </section>
                    <section className="curriculum-body-top">
                        <div className="curriculum-experience-titles">
							<div className={this.state.menu === 0 ? "curriculum-experience-title curriculum-experience-title-active" : "curriculum-experience-title"} onClick={() => this.setState({menu: 0})}>
								<h4>work experience</h4>
							</div>
							<div className={this.state.menu === 1 ? "curriculum-experience-title curriculum-experience-title-active" : "curriculum-experience-title"} onClick={() => this.setState({menu: 1})}>
								<h4>education</h4>
							</div>
							<div className={this.state.menu === 2 ? "curriculum-experience-title curriculum-experience-title-active" : "curriculum-experience-title"} onClick={() => this.setState({menu: 2})}>
								<h4>languages</h4>
							</div>
							<div className={this.state.menu === 3 ? "curriculum-experience-title curriculum-experience-title-active" : "curriculum-experience-title"} onClick={() => this.setState({menu: 3})}>
								<h4>Courses</h4>
							</div>
						</div>
						<div className="curriculum-experience-contents">
							<div id="experience_content" className="curriculum-experience-container" style={this.state.menu > 0 ? {marginLeft: "-105%"} : {}}>
								<ExperienceCard />
								<ExperienceCard />
								<ExperienceCard />
								<ExperienceCard />
								<ExperienceCard />
							</div>
							<div id="studies_content" className="curriculum-experience-container" style={this.state.menu > 1 ? {marginLeft: "-105%"} : this.state.menu === 1 ? {} : {marginLeft: "105%"}}>
								<ExperienceCard />
								<ExperienceCard />
								<ExperienceCard />
							</div>
							<div id="languages_content" className="curriculum-experience-container" style={this.state.menu > 2 ? {marginLeft: "-105%"} : this.state.menu === 2 ? {} : {marginLeft: "105%"}}>
								<ExperienceCard />
							</div>
							<div id="courses_content" className="curriculum-experience-container" style={this.state.menu === 3 ? {} : {marginLeft: "105%"}}>
								<ExperienceCard />
								<ExperienceCard />
							</div>
						</div>
                    </section>
					<section className="curriculum-body-bottom">
						<h2>Skills</h2>
						<div className="curriculum-skills-container">
							<div className="curriculum-skills" style={{marginBottom: "-25%", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
								<div className="curriculum-skills-top">
									<span>React Native</span>
									<span>TypeScript</span>
									<span>MongoDB</span>
									<span>C Basics</span>
									<span>Flutter</span>
								</div>
								<div className="curriculum-skills-topLeft">
									<span>Work in group</span>
									<span>Java</span>
								</div>
								<div className="curriculum-skills-topRight">
									<span>NodeJS</span>
									<span>Python</span>
									<span>Express</span>
									<span>C#</span>
								</div>
								<div className="curriculum-skills-background">STUDIES</div>
							</div>
							<div style={{display: "flex", width: "100%", justifyContent: "center"}}>
								<div className="curriculum-skills" style={{marginRight: "-25%", display: "flex"}}>
									<div className="curriculum-skills-bottomLeft">
										<span>Spring Boot</span>
										<span>Cucumber</span>
										<span>SCRUM</span>
										<span>VueJS</span>
										<span>PHP</span>
										<span>SQL</span>
									</div>
									<div className="curriculum-skills-bottom">
										<span>JavaScript</span>
									</div>
									<div className="curriculum-skills-background">WORK</div>
								</div>
								<div className="curriculum-skills">
									<div className="curriculum-skills-bottomRight">
										<span>Artificial Intelligence</span>
										<span>Unity</span>
									</div>
									<div className="curriculum-skills-background">PROJECTS</div>
								</div>
							</div>
							<div className="curriculum-skills-center">
								<span>HTML</span>
								<span>CSS</span>
								<span>Responsability</span>
							</div>
						</div>
					</section>
					<section className="curriculum-footer">
						<div className="curriculum-footer-background"></div>
						<div className="curriculum-footer-mail">
							<img className="curriculum-footer-mail-image" src={email} alt="email" />
						</div>
						<div className="curriculum-footer-phone">
							<img className="curriculum-footer-phone-image" src={phone} alt="email" />
						</div>
						<a href="https://www.linkedin.com/in/mario-alva/" target="_BLANK" rel="noreferrer" className="curriculum-footer-linkedin">
							<img className="curriculum-footer-linkedin-image" src={linkedin} alt="Linkedin" />
						</a> 
						<a href="https://wa.me/+34633691545" target="_BLANK" rel="noreferrer" className="curriculum-footer-whatsapp">
							<img className="curriculum-footer-whatsapp-image" src={whatsapp} alt="Whatsapp" />
						</a> 
						<a href="https://instagram.com/mario_alva4?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_BLANK" rel="noreferrer" className="curriculum-footer-instagram">
							<img className="curriculum-footer-instagram-image" src={instagram} alt="Instagram" />	
						</a> 
					</section>
                </div>
            </div>
        )
    }
}