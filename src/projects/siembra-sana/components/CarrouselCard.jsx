import React, { Component } from 'react';
import "../css/CarrouselCard.css";
import Button from './Button';
import Cesta from '../img/cesta.png';

export default class CarrouselCard extends Component {
	render() {
		return(
			<div className='carrouselCard-container'>
				<div className='carrouselCard-image'>
					<img width="70%" src={this.props.img} alt="carrouselCard" />
				</div>
				<div className='carrouselCard-info'>
					<div className='carrouselCard-title-container'>
						<a className='carrouselCard-title' href=""><h4>{this.props.title}</h4></a>
					</div>
					<div className='carrouselCard-price-container'>
						<span className='carrouselCard-price'>{this.props.price}</span>
						<div style={{display: "flex", alignItems: "center"}}>
							<div className='carrouselCard-stars'>
								{this.props.rating >= 1 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
								{this.props.rating >= 2 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
								{this.props.rating >= 3 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
								{this.props.rating >= 4 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
								{this.props.rating >= 5 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
							</div>
							<span style={{color:"#777777"}}>({this.props.rating >= 5 ? "5" : this.props.rating})</span>
						</div>
					</div>
				</div>
				<div className='carrouselCard-buttons'>
					<div className='carrouselCard-cesta'>
						<img width="22px" src={Cesta} alt="Cesta" />
					</div>
					<Button className="carrouselCard-button" text='Comprar' />
				</div>
			</div>
		)
	}
}