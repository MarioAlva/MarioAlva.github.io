import React, { Component } from "react";
import '../css/App.css';
import Polygon from './Polygon';
import Curriculum from './Curriculum';
import projects from '../info/projects';
import close from '../img/close.svg';

export default class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {
			showCurriculum: false,
			scroll: false
		}
	}
	render(){
 		const pop = () => {
			if(document.getElementsByClassName("curriculum-container")[0].scrollTop > 300){
				this.setState({scroll: true});
			}else{
				this.setState({scroll: false});
			}
		}
		return(
			<div className="language">
				<div>
      				<div className="App">
      			    <header className='app-header'>

      			    </header>
					  <div id="container" className='app-body'>
      			    {projects.map((project, index) => (
						<a href={"/" + project.name}>
      			      		<Polygon color={project.color} title={project.title} image={project.image} index={projects.length - index} />
						</a>
      			    ))}
					  	</div>
      			  </div>
      			  <footer className='app-footer'>
      			    <div className='app-footer-curriculum' onClick={() => this.setState({showCurriculum: true})}>
      			      Mi curriculum
      			    </div>
      			  </footer>
      			  {this.state.showCurriculum &&
					<div className="curriculum-container" id="curriculum" onScroll={() => pop()}>
						<div id="curriculum_back" className={this.state.scroll ? "curriculum-back-scroll" : "curriculum-back-fixed-button"} onClick={() => this.setState({showCurriculum: false})}>
							<img width="70px" src={close} alt="close" />
						</div>
						<Curriculum/>
					</div>
					}
      			</div>
			</div>
		);
	}
}