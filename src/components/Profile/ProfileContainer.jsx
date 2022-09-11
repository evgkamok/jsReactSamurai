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

const ProfileContainer = (props) => {
	let { userId } = useParams();

	useEffect(() => {
		if (!userId) {
			userId = 23053;
			// userId = 2;
		}
		props.setUserProfileDataRequest(userId);
		props.getUserProfileStatusRequest(userId);
	}, [userId]);

	return (
		<Profile
			{...props.userProfileData}
			userProfileStatus={props.userProfileStatus}
			updateUserProfileStatusRequest={props.updateUserProfileStatusRequest}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		userProfileData: state.profilePage.userProfileData,
		userProfileStatus: state.profilePage.userProfileStatus,
	};
};

export default connect(mapStateToProps, {
	setUserProfileDataRequest,
	getUserProfileStatusRequest,
	updateUserProfileStatusRequest,
})(ProfileContainer);
