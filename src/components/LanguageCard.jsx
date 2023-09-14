import React, { Component } from "react";

export default class LanguageCard extends Component{
    render(){
        return(
            <div className="curriculum-experience-content">
                <div className="curriculum-experience-content-image">
				    <img height="100%" src={this.props.logo} alt="logo" />
				</div>
				<div style={{width: "100%"}}>
					<div style={{display: "flex", alignItems: "center"}}>
						<span className="curriculum-experience-content-title">{this.props.title}</span>
						<span className="curriculum-experience-content-years">- &nbsp;{this.props.period}</span>
					</div>
					<p className="curriculum-experience-content-description">
						{this.props.description}
					</p>
				</div>
			</div>
        );
    }
}