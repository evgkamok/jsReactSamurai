import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.authUser.isAuth,
	loginUser: state.authUser.login,
});

export default connect(mapStateToProps, { logoutRequest })(HeaderContainer);
