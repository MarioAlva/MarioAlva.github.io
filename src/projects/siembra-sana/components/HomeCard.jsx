import React, { Component } from 'react';
import Button from './Button';
import Plant from '../img/plant.png';
import "../css/HomeCard.css"

export default class HomeCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return(
			<div className='ss-homeCard-container'>
				{this.props.number % 2 === 0 && 
				<div className='ss-homeCard-image'>
					<img className='ss-homeCard-secondary' height="170px" src={this.props.secondaryImg} alt="Material" />	
					<div className='ss-homeCard-primary'>
						<img height="450px" src={this.props.primaryImg} alt="Item" />
					</div>
				</div>
				}
				<div className='ss-homeCard-info'>
					<h2 className='ss-title-home ss-h2' style={{textAlign: "left", marginBottom: "0", fontSize:"60px", width: "100%"}}>{this.props.title}</h2>
					<img className='ss-homeCard-plant' width="100px" src={Plant} alt="Plant" />
					<h4 className='ss-homeCard-subtitle'>{this.props.subtitle}</h4>
					<p className='ss-homeCard-description'>{this.props.description}</p>
					<div style={{display: "flex", alignItems: "center"}}>
						<div style={{height: "60px"}}>
							<Button text="COMPRAR AHORA" />
						</div>
						<h3 className='ss-homeCard-price'>{this.props.price}</h3>
					</div>
				</div>
				{this.props.number % 2 !== 0 && 
				<div className='ss-homeCard-image2'>
					<div className='ss-homeCard-primary'>
						<img height="450px" src={this.props.primaryImg} alt="Item" />
					</div>
					<img style={{marginLeft:"-130px"}} className='ss-homeCard-secondary' height="170px" src={this.props.secondaryImg} alt="Material" />	
				</div>
				}
			</div>
		)
	}
}