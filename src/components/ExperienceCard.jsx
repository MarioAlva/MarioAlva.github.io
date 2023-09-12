import React, { Component } from "react";
import '../css/ExperienceCard.css';
import giesecke from '../img/giesecke.jpg';
import skills from '../img/skills.svg';
import back from '../img/back.svg';

export default class ExperienceCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			skills: false,
		}
	}
	render(){
		return(
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
				<div className={this.state.skills ? "curriculum-experience-content-skills-active" : "curriculum-experience-content-skills"}>
					<img onClick={() => this.setState({skills: false})} className="curriculum-skills-back" src={back} alt="back" />
					<div className="curriculum-experience-skills-container">
						<ul className="curriculum-experience-skills-text">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>JavaScript</li>
						</ul>
					</div>
					<img onClick={() => this.setState({skills: true})} className="curriculum-skills-button" src={skills} alt="skills" />
				</div>
			</div>
		);
	}
}