import React, { Component } from "react";
import '../css/Curriculum.css';
import photo from '../img/photo.jpg';

export default class Curriculum extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="curriculum-container">
                <div className="curriculum">
                    <section>
                        <h1 className="curriculum-title">Mario Antonio Alva Howes</h1>
                        <div className="curriculum-header">
                            <div className="curriculum-header-image">
                                <img src={photo} alt="Mario Antonio Alva Howes" />
                            </div>
                                <div className="curriculum-image-shadow"></div>
                            <div className="curriculum-header-description">
                                <p>
                                I am a <strong>responsible</strong> person, eager to work, seeking to expand my <strong>work experience</strong> while continuing my studies as a <strong>telematic engineer</strong>. I have a <strong>high capacity</strong> for learning in any environment and I <strong>excel in computer</strong> and ICT environments.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="curriculum-body-top">
                            <h2 className="curriculum-section-title">Personal Information</h2>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}