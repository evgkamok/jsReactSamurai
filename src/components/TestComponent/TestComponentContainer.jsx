import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTestUser, testFollowThunk, testStopFollowThunk, getUsersTest } from './test-reducer';
import TestComponent from './TestComponent';

class TestComponentContainer extends Component {
	componentDidMount() {
		this.props.getUsersTest();
		// axios
		// 	.get('https://social-network.samuraijs.com/api/1.0/users', {
		// 		withCredentials: true,
		// 	})
		// 	.then((response) => {
		// 		this.props.getTestUser(response.data.items);
		// 	});
	}

	// testFollowRequest = (userId) => {
	// 	this.props.setDisabledButtons(userId, true);
	// 	axios
	// 		.post(
	// 			'https://social-network.samuraijs.com/api/1.0/follow/' + userId,
	// 			{},
	// 			{
	// 				withCredentials: true,
	// 				headers: {
	// 					'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	// 				},
	// 			}
	// 		)
	// 		.then((response) => {
	// 			if (response.data.resultCode === 0) {
	// 				this.props.testFollow(userId);
	// 				this.props.setDisabledButtons(userId, false);
	// 			}
	// 		});
	// };

	// testStopFollowRequest = (userId) => {
	// 	this.props.setDisabledButtons(userId, true);
	// 	axios
	// 		.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {
	// 			withCredentials: true,
	// 			headers: {
	// 				'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	// 			},
	// 		})
	// 		.then((response) => {
	// 			if (response.data.resultCode === 0) {
	// 				this.props.testStopFollow(userId);
	// 				this.props.setDisabledButtons(userId, false);
	// 			}
	// 		});
	// };

	render() {
		return (
			<TestComponent
				users={this.props.users}
				disabledButtonsStack={this.props.disabledButtonsStack}
				testFollowThunk={this.props.testFollowThunk}
				testStopFollowThunk={this.props.testStopFollowThunk}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.testPage.users,
		disabledButtonsStack: state.testPage.disabledButtonsStack,
	};
};

export default connect(mapStateToProps, {
	getUsersTest,
	testFollowThunk,
	testStopFollowThunk,
})(TestComponentContainer);
