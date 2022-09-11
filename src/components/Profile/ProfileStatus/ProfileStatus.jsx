import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		status: this.props.userProfileStatus,
		editMode: false,
	};

	activateEditMode = () => {
		this.setState({ ...this.state, editMode: true });
	};

	deactivateEditMode = () => {
		this.setState({ ...this.state, editMode: false });
		this.props.updateUserProfileStatusRequest(this.state.status);
	};

	onChangeStatus = (e) => {
		const newStatus = e.target.value;
		this.setState({ ...this.state, status: newStatus });
	};

	render() {
		return (
			<div>
				<span>Status - </span>
				{!this.state.editMode && (
					<span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
				)}
				{this.state.editMode && (
					<input
						autoFocus={true}
						value={this.state.status}
						onChange={(e) => this.onChangeStatus(e)}
						onBlur={this.deactivateEditMode}
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
