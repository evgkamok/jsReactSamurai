import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataRequest, logoutRequest } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
	componentDidMount() {
		this.props.getAuthUserDataRequest();
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.authUser.isAuth,
	loginUser: state.authUser.login,
});

export default connect(mapStateToProps, { getAuthUserDataRequest, logoutRequest })(HeaderContainer);
