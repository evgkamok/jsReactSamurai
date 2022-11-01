import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import defaultPhoto from '../../assets/defaultPhoto.jpg';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';

export default function Profile(props) {
	if (!props.userId) {
		return <Preloader />;
	}

	return (
		<div className={style.wrapper}>
			<div className={style.profilePhoto}>
				<img src={props.photos.large ? props.photos.large : defaultPhoto} alt='photo' />
			</div>
			<div className={style.profileInfo}>
				<div>{props.fullName}</div>
				<div>{props.aboutMe}</div>
				<ProfileStatus
					userProfileStatus={props.userProfileStatus}
					updateUserProfileStatusRequest={props.updateUserProfileStatusRequest}
					authUserId={props.authUserId}
					userId={props.userId}
				/>
			</div>
			<div className={style.profilePosts}>
				<ProfilePostsContainer />
			</div>
		</div>
	);
}
