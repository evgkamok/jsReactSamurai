import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
	componentDidMount() {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true,
			})
			.then((response) => {
				if (response.data.resultCode === 0) {
					this.props.setAuthUserData(response.data.data);
				}
			});
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.authUser.isAuth,
	loginUser: state.authUser.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
