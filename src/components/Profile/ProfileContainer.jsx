import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import withRouter from '../../hoc/withRouter';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 2;
		}

		axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then((response) => {
			this.props.setUserProfile(response.data);
		});
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);
