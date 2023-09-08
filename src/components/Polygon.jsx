import React, { Component } from "react";
import '../css/Polygon.css';

export default class Polygon extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        const imageStyle = {
            background: `linear-gradient(to right, rgba(255,255,255,0),
              ${this.props.color}), url(${this.props.image})`,
        }
        return(
            <div className="polygon-container" style={{backgroundColor: this.props.color, zIndex: this.props.index}}>
                <img className="polygon-image" src={this.props.image} alt="backgroundImage" />
                <h1 className="polygon-title">{this.props.title}</h1>
            </div>
        )
    }
}