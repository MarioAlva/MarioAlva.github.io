import React, { Component } from 'react';

export default class Prensa extends Component {
	render() {
		return(
			<div>
				<h1>H1</h1>
				<h2>H2</h2>
				<h3>H3</h3>
				<h4>H4</h4>
				<h5>H5</h5>
				<h6>H6</h6>
				<p>Parrafo</p>
				<img id='imagen-perro' className='' src="" alt="Perro" />
				<a href="/inicio" target='_BLANK'>Ir a inicio</a>
				<ol>
					<li>Hola1</li>
					<li>Hola2</li>
					<li>Hola3</li>
					<li>Hola4</li>
				</ol>
				<p>Soy un parrafo <b>En negrita</b></p>
				<input type="text" value="Hola que tal" />
			</div>
		)
	}
}