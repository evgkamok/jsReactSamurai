import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	setUserProfileDataRequest,
	getUserProfileStatusRequest,
	updateUserProfileStatusRequest,
} from '../../redux/profile-reducer';
import Profile from './Profile';
import { useEffect } from 'react';
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
	let { userId } = useParams();

	useEffect(() => {
		if (!userId) {
			userId = props.authUserId;
		}
		props.setUserProfileDataRequest(userId);
		props.getUserProfileStatusRequest(userId);
	}, [userId]);

	return (
		<Profile
			{...props.userProfileData}
			authUserId={props.authUserId}
			userProfileStatus={props.userProfileStatus}
			updateUserProfileStatusRequest={props.updateUserProfileStatusRequest}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		authUserId: state.authUser.id,
		userProfileData: state.profilePage.userProfileData,
		userProfileStatus: state.profilePage.userProfileStatus,
	};
};

export default compose(
	WithAuthRedirect,
	connect(mapStateToProps, {
		setUserProfileDataRequest,
		getUserProfileStatusRequest,
		updateUserProfileStatusRequest,
	})
)(ProfileContainer);
