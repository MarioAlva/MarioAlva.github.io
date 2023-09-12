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
						<div className="curriculum-skills-container">
							<div className="curriculum-skills" style={{marginBottom: "-25%", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
								<div className="curriculum-skills-top">
									html
								</div>
								<div className="curriculum-skills-topLeft">
									html
								</div>
								<div className="curriculum-skills-topRight">
									html
								</div>
							</div>
							<div style={{display: "flex", width: "100%", justifyContent: "center"}}>
								<div className="curriculum-skills" style={{marginRight: "-25%", display: "flex"}}>
									<div className="curriculum-skills-bottomLeft">
										html
									</div>
									<div className="curriculum-skills-bottom">
										html
									</div>
								</div>
								<div className="curriculum-skills">
									<div className="curriculum-skills-bottomRight">html</div>
								</div>
							</div>
							<div className="curriculum-skills-center">
								html
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