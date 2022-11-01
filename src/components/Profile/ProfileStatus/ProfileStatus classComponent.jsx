import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		status: this.props.userProfileStatus,
		editMode: false,
	};

	activateEditMode = () => {
		this.setState({ editMode: true });
	};

	deactivateEditMode = () => {
		this.setState({ editMode: false });
		this.props.updateUserProfileStatusRequest(this.state.status);
	};

	onChangeStatus = (e) => {
		const newStatus = e.target.value;
		this.setState({ status: newStatus });
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.userProfileStatus !== this.props.userProfileStatus) {
			this.setState({ status: this.props.userProfileStatus });
		}
	}

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
