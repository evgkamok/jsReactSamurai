import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testFollowThunk, testStopFollowThunk, getUsersTest } from './test-reducer';
import TestComponent from './TestComponent';

class TestComponentContainer extends Component {
	componentDidMount() {
		this.props.getUsersTest();
	}

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
