import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithAuthRedirect = (Component) => {
	const WithAuthRedirectComponent = (props) => {
		if (!props.isAuth) {
			return <Navigate to={'/login'} replace />;
		}
		return <Component {...props} />;
	};

	const mapStateToProps = (state) => {
		return {
			isAuth: state.authUser.isAuth,
		};
	};

	return connect(mapStateToProps)(WithAuthRedirectComponent);
};

export default WithAuthRedirect;
