// import React from 'react'
// export default function Login() {
//   return (
//     <div>Login</div>
//   )
// }

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
	state = {
		editMode: false,
	};

	test = () => {
		alert(this.state.editMode);
	};

	render() {
		return (
			<div>
				<div>Login</div>
				<div>
					<button onClick={this.test}>Start</button>
					<div>{this.state.editMode ? 'true' : 'false'}</div>
				</div>
			</div>
		);
	}
}
