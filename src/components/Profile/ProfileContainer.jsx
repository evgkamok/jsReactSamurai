import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfileDataRequest } from '../../redux/profile-reducer';
import Profile from './Profile';
import { useEffect } from 'react';

const ProfileContainer = (props) => {
	let { userId } = useParams();

	useEffect(() => {
		if (!userId) {
			userId = 11;
		}
		props.setUserProfileDataRequest(userId);
	}, [userId]);

	return <Profile {...props.userProfileData} />;
};

const mapStateToProps = (state) => {
	return {
		userProfileData: state.profilePage.userProfileData,
	};
};

export default connect(mapStateToProps, { setUserProfileDataRequest })(ProfileContainer);
