import React, { Component } from 'react';
import '../css/Product.css';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selector: 1,
			quantity: 1
		}
	}
	render() {
		return(
			<div className='about-container'>
				<div className='about-header-container'>
					<div className='about-black-opacity'>
						<div className='about-header'>
							<h2 className='about-header-title'>TIENDA</h2>
							<div><h4 className='about-header-subtitle'><a className='about-header-link' href="/">Siembra Sana</a> <div style={{fontSize: "14px", margin: "0 10px"}}>></div> Productos</h4></div>
						</div>
					</div>
				</div>
				<div className='product-container'>
					<section style={{display: "inline-flex"}}>
						<div className='product-left'>
							<div className='product-image'></div>
							<div className='product-image-carrousel'></div>
						</div>
						<div className='product-right'>
							<div style={{display: "flex", alignItems: "center"}}>
								<div className='carrouselCard-stars'>
									{this.props.rating >= 1 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
									{this.props.rating >= 2 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
									{this.props.rating >= 3 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
									{this.props.rating >= 4 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
									{this.props.rating >= 5 ?  <div className='carrouselCard-star'></div> : <div className='carrouselCard-empry-star'></div>}
								</div>
								<span style={{color:"#777777"}}>({this.props.rating >= 5 ? "5" : this.props.rating} out of 5)</span>
							</div>
							<h2 className='product-title'>CACAO NIBS SACHET / TROCITOS DE CACAO</h2>
							<h3 className='product-price'>7,58€</h3>
							<span className='product-description'>Es la mejor opción para completar los batidos diarios y saludables que nos gustan, le darán a sus postres, tortas y pasteles el toque amazónico que no podrás resistir una vez que lo pruebas.</span>
							{/* {this.props.stock > 0 ?  */}
							{!this.props.stock ? 
								<div className='product-buy'>
									<div className='product-description'>
										{this.props.stock} disponibles
									</div> 
									<div>
										<div className='product-quantity'>
											<button onClick={() => {
												if(this.state.quantity > 1) this.setState({quantity: this.state.quantity - 1})
											 }} className='product-quantity-button' style={{border: "none", borderRight: "1px solid #0000001d"}}>-</button>
											<div className='product-quantity-number'>{this.state.quantity}</div>
											<button onClick={() => {
												if(this.state.quantity < 90) this.setState({quantity: this.state.quantity + 1})
											 }} className='product-quantity-button' style={{border: "none", borderLeft: "1px solid #0000001d"}}>+</button>
										</div>
										<button className='product-add-button'>AÑADIR AL CARRITO</button>
									</div>
								</div>
								: <div className='product-description'>
									Agotado
								</div>
							}
							<div style={{marginTop: "20px", display: "flex", flexDirection: "column"}}>
								<strong style={{fontWeight: "500"}}>SKU : <span className='product-description'>MC184</span></strong>
								<strong style={{fontWeight: "500"}}>Categoría : <span className='product-description'>Maca para mujer</span></strong>
							</div>
						</div>
					</section>
					<section style={{width: "100%"}}>
						<div className='product-topics'>
							<div
								onClick={() => this.setState({"selector": 1})}
								style={this.state.selector === 1 ? {borderBottom: "2px solid green", marginLeft: "0"} : {marginLeft: "0"}}
								className='product-topic'
							>
								Descripción
							</div>
							<div
								onClick={() => this.setState({"selector": 2})}
								style={this.state.selector === 2 ? {borderBottom: "2px solid green"} : {}}
								className='product-topic'
							>
								Información adicional
							</div>
							<div
								onClick={() => this.setState({"selector": 3})}
								className='product-topic'
								style={this.state.selector === 3 ? {borderBottom: "2px solid green"} : {}}
							>
								Valoraciones (2)
							</div>
						</div>
						{this.state.selector === 1 &&
						<div className='product-bottom-description'>
							La maca en general aumenta la libido y la función sexual, además disminuye el debilitamiento físico y mental.
						</div>
						}
						{this.state.selector === 2 && 
						<div style={{width: "100%", marginTop: "45px"}}>
							<div className='product-info-add'>
								<div className='product-info' style={{borderRight: "1px solid #0000001d", fontWeight: "650"}}>Peso</div>
								<div className='product-info' style={{fontStyle: "italic"}}>0,085 kg</div>
							</div>
						</div>
						}
						{this.state.selector === 3 && <div>Soy 3</div>}
					</section>
				</div>
			</div>
		)
	}
}