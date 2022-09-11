import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import style from './Profile.module.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';

export default function Profile(props) {
	if (!props.userId) {
		return <Preloader />;
	}

	return (
		<div className={style.wrapper}>
			<div>
				<img src={props.photos.large} alt='photo' />
			</div>
			<ProfileStatus
				userProfileStatus={props.userProfileStatus}
				updateUserProfileStatusRequest={props.updateUserProfileStatusRequest}
			/>
			<div>{props.fullName}</div>
			<div>{props.aboutMe}</div>
		</div>
	);
}
