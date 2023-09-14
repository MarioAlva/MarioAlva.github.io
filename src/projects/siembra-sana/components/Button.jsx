import React, { Component } from 'react';
import "../css/Button.css";

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			convert: false,
			firstTime: false
		}
	}
	render() {
		return(
			<div className='general-button' onMouseEnter={() => this.setState({convert: true, firstTime: true})} onMouseLeave={() => this.setState({convert: false})}>
				<div className='convert-green' style={this.state.convert ? {marginTop: "0", height: "70px"} : this.state.firstTime ? {marginTop: "222px", height: "160px"} : {}}></div>
				<span style={{zIndex: "1"}}>{this.props.text}</span>
			</div>
		)

	}
}