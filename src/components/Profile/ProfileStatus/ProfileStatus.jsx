import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.userProfileStatus);

	useEffect(() => {
		setStatus(props.userProfileStatus);
	}, [props.userProfileStatus]);

	const activateEditMode = () => {
		if (props.authUserId === props.userId) setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateUserProfileStatusRequest(status);
	};

	const onChangeStatus = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div>
			<span>Status - </span>
			{!editMode && <span onClick={activateEditMode}>{status}</span>}
			{editMode && (
				<input
					autoFocus={true}
					value={status}
					onChange={(e) => onChangeStatus(e)}
					onBlur={deactivateEditMode}
				/>
			)}
		</div>
	);
};

export default ProfileStatus;
