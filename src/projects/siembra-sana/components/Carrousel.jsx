import React, { Component } from 'react';
import "../css/Carrousel.css";
import CarrouselCard from './CarrouselCard';
import Arrow from '../img/arrow.png';
import macaRoyaleWomanItem from '../img/macaRoyaleWomanItem.png';
import macaWomanCapsulasItem from '../img/macaWomanCapsulasItem.png';


export default class Carrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrowActive: false,
			reload : false,
		}
	}
	render() {
		const nextCarrousel = () => {
			if(this.state.arrowActive) return;
			else{
				let carrousel = document.getElementsByClassName('carrousel-card-container')[0];
				let carrouselSize = document.getElementsByClassName('carrouselCard-container').length;
				let firstCard = document.getElementsByClassName('carrouselCard-container')[0];
				let lastCard = document.getElementsByClassName('carrouselCard-container')[carrouselSize - 1];
				carrousel.appendChild(firstCard);
				carrousel.insertBefore(lastCard, firstCard);
				carrousel.classList.add('carrousel-transition1');
				this.setState({arrowActive: true});
				setTimeout(() => {
					if(carrousel.classList.contains('carrousel-transition1')){
						carrousel.classList.remove('carrousel-transition1');
						this.setState({arrowActive: false});
					}
				}, 500);
			}
		}
		const prevCarrousel = () => {
			if(this.state.arrowActive) return;
			else{
				let carrousel = document.getElementsByClassName('carrousel-card-container')[0];
				let carrouselSize = document.getElementsByClassName('carrouselCard-container').length;
				let firstCard = document.getElementsByClassName('carrouselCard-container')[0];
				let lastCard = document.getElementsByClassName('carrouselCard-container')[carrouselSize - 1];
				carrousel.insertBefore(lastCard, firstCard);
				carrousel.classList.add('carrousel-transition2');
				this.setState({arrowActive: true});
				setTimeout(() => {
					if(carrousel.classList.contains('carrousel-transition2')){
						carrousel.classList.remove('carrousel-transition2');
						this.setState({arrowActive: false});
					}
				}, 500);
			}
		}
		return(
			<div>
				<div className='carrousel-container'>
					<div className='carrousel-arrow'>
						<div onClick={() => prevCarrousel()} className='carrousel-arrow-container'>
							<img className='carrousel-rotateLeft' width="30px" src={Arrow} alt="backArrow" />
						</div>
					</div>
					<div className='carrousel-items'>
						<div className='carrousel-card-container'>
							<CarrouselCard className='carrousel-card' />
							<CarrouselCard
								className='carrousel-card'
								img={macaRoyaleWomanItem}
								title="CHOCOLATE BAR DARK 70% / BARRA DE CHOCOLATE 70% BITTER"
								price="5,22 €"
								rating="4"
							/>
							<CarrouselCard className='carrousel-card' img={macaWomanCapsulasItem} />
							<CarrouselCard className='carrousel-card' />
							<CarrouselCard className='carrousel-card' />
						<CarrouselCard className='carrousel-card' />
						<CarrouselCard className='carrousel-card' />
						</div>
					</div>
					<div className='carrousel-arrow'>
						<div onClick={() => nextCarrousel()} className='carrousel-arrow-container'>
							<img className='carrousel-rotateRight' width="30px" src={Arrow} alt="nextArrow" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}