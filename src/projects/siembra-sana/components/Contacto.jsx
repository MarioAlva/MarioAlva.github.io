import React, { Component } from 'react';
import '../css/Contact.css';

export default class Contact extends Component {
	render() {
		return(
			<div style={{display: "flex", justifyContent: "center"}}>
				<div className='about-header-container'>
					<div className='about-black-opacity'>
						<div className='about-header'>
							<h2 className='about-header-title'>CONTACTO</h2>
							<div><h4 className='about-header-subtitle'><a className='about-header-link' href="/">Siembra Sana</a> <div style={{fontSize: "14px", margin: "0 10px"}}>></div> Contacto</h4></div>
						</div>
					</div>
				</div>
				<div className='about-sobre-nosotros' style={{marginTop: "431px", marginBottom: "150px"}}>
					<div className='contact-input-container'>
						<label className='contact-label'  htmlFor="Nombre">Nombre</label>
						<input className='contact-input' type="text" name="Nombre" id="name" placeholder='Nombre' />
					</div>
					<div className='contact-input-container'>
						<label className='contact-label'  htmlFor="Correo">Correo</label>
						<input className='contact-input' type="text" name="Correo" id="mail" placeholder='Correo' />
					</div>
					<div className='contact-input-container'>
						<label className='contact-label' htmlFor="Message">Mensaje</label>
						<textarea className='contact-input' style={{height: "100px", width: "calc(100% - 6px)", padding: "8px 10px"}} name="Message" id="message" cols="30" rows="10" placeholder='Mensaje'></textarea>
					</div>
					<button className='contact-button'>Enviar</button>
				</div>
			</div>
		)
	}
}