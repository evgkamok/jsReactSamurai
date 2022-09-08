import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfileDataRequest } from '../../redux/profile-reducer';
import Profile from './Profile';
import withRouter from '../../hoc/withRouter';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.setUserProfileDataRequest(userId);
	}

	render() {
		return <Profile {...this.props.userProfileData} />;
	}
}

const mapStateToProps = (state) => {
	return {
		userProfileData: state.profilePage.userProfileData,
	};
};

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileDataRequest })(ProfileContainerWithRouter);
