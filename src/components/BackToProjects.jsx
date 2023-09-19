import { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

export default class BacktoProjects extends Component {
	render() {
		return (
			<div>
				<Link to="/">
					<div className='back-projects'>
					</div>
				</Link>
				<Outlet />
			</div>
		);
	}
}