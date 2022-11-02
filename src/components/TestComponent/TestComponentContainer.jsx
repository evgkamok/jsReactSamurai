import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/user-selectors';
import { testFollowThunk, testStopFollowThunk, getUsersTest } from './test-reducer';

// import TestComponent from './TestComponent';

// class TestComponentContainer extends Component {
// 	componentDidMount() {
// 		this.props.getUsersTest();
// 	}

// 	render() {
// 		console.log('ssss');
// 		return (
// 			<TestComponent
// 				users={this.props.users}
// 				disabledButtonsStack={this.props.disabledButtonsStack}
// 				testFollowThunk={this.props.testFollowThunk}
// 				testStopFollowThunk={this.props.testStopFollowThunk}
// 			/>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.testPage.users,
// 		disabledButtonsStack: state.testPage.disabledButtonsStack,
// 	};
// };

// export default connect(mapStateToProps, {
// 	getUsersTest,
// 	testFollowThunk,
// 	testStopFollowThunk,
// })(TestComponentContainer);

const AppFirst = (props) => {
	return <div>H1</div>;
};

const mapStateToProps = (state) => {
	return {
		users: 'getUsers',
		authUserId: state.authUser.id,
		userProfileData: state.profilePage.userProfileData,
		userProfileStatus: state.profilePage.userProfileStatus,
	};
};

const AppWithConnect = connect(mapStateToProps, {
	getUsersTest,
	testFollowThunk,
	testStopFollowThunk,
})(AppFirst);

const Profile = (props) => {
	return (
		<div>
			<div>Profile</div>
		</div>
	);
};

// const MyPosts = (props) => {
// 	return (
// 		<div>
// 			<Profile />
// 			<div>MyPosts</div>
// 		</div>
// 	);
// };

const TestComponentContainer = (props) => {
	return (
		<div>
			{/* <MyPosts />
			<div>LaST</div> */}
			<AppWithConnect />
		</div>
	);
};

export default TestComponentContainer;
