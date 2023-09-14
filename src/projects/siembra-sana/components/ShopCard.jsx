import React, { Component } from 'react';
import "../css/ShopCard.css";
// import Cesta from '../img/cesta.png';

export default class ShopCard extends Component {
	render() {
		return(
			<div className='shopCard-container'>
				<div className='shopCard-image'>
					<img width="70%" src={this.props.img} alt="shopCard" />
				</div>
				<div className='shopCard-info'>
					<div className='shopCard-title-container'>
						<a className='shopCard-title' href=""><h4>{this.props.title}</h4></a>
					</div>
					<div className='shopCard-price-container'>
						<span className='shopCard-price'>{this.props.price}</span>
						<div style={{display: "flex", alignItems: "center"}}>
							<div className='shopCard-stars'>
								{this.props.rating >= 1 ?  <div className='shopCard-star'></div> : <div className='shopCard-empry-star'></div>}
								{this.props.rating >= 2 ?  <div className='shopCard-star'></div> : <div className='shopCard-empry-star'></div>}
								{this.props.rating >= 3 ?  <div className='shopCard-star'></div> : <div className='shopCard-empry-star'></div>}
								{this.props.rating >= 4 ?  <div className='shopCard-star'></div> : <div className='shopCard-empry-star'></div>}
								{this.props.rating >= 5 ?  <div className='shopCard-star'></div> : <div className='shopCard-empry-star'></div>}
							</div>
							<span style={{color:"#777777"}}>({this.props.rating >= 5 ? "5" : this.props.rating})</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}