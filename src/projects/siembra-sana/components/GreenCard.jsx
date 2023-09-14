import React, { Component } from 'react';
import "../css/GreenCard.css";

export default class GreenCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<div className='greenCard-container'>
				<img height="50px" src={this.props.img} alt="icon" />
				<h4 className='greenCard-title'>{this.props.title}</h4>
				<p className='greenCard-description'>{this.props.description}</p>
			</div>
		)
	}
}