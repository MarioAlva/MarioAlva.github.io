import React, { Component } from "react";
import '../css/ExperienceCard.css';
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
				<div className="curriculum-experience-content-image">
					<img height="100%" src={this.props.logo} alt="image" />
				</div>
				<div className="curriculum-experience-content-info">
					<div style={{display: "flex", alignItems: "center"}}>
						<span className="curriculum-experience-content-title">{this.props.title}</span>
						<span className="curriculum-experience-content-years">- &nbsp;{this.props.period}</span>
					</div>
					<p className="curriculum-experience-content-description">
						{this.props.description}
					</p>
				</div>
				<div className={this.state.skills ? "curriculum-experience-content-skills-active" : "curriculum-experience-content-skills"}>
					<img onClick={() => this.setState({skills: false})} className="curriculum-skills-back" src={back} alt="back" />
					<div className="curriculum-experience-skills-container">
						<ul className="curriculum-experience-skills-text">
							{this.props.skills.map((skill, index) => {
								return <li key={index}>{skill}</li>
							})}
						</ul>
					</div>
					<img onClick={() => this.setState({skills: true})} className="curriculum-skills-button" src={skills} alt="skills" />
				</div>
			</div>
		);
	}
}