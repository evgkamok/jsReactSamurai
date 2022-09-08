import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	setCurrentPage,
	getUsers,
	startFollowUserRequest,
	stopFollowUserRequest,
} from '../../redux/user-reducer';

class UserContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.countOnPage);
	}

	changeCurrentPage = (numberPage) => {
		this.props.setCurrentPage(numberPage);
		this.props.getUsers(numberPage, this.props.countOnPage);
	};

	render() {
		const pages = Math.ceil(this.props.totalCountPage / this.props.countOnPage);
		const pagesNumbers = [];
		for (let i = 1; i <= pages; i++) {
			pagesNumbers.push(i);
		}
		return (
			<Users
				pagesNumbers={pagesNumbers}
				currentPage={this.props.currentPage}
				changeCurrentPage={this.changeCurrentPage}
				users={this.props.users}
				isFetching={this.props.isFetching}
				buttonsDisabledStack={this.props.buttonsDisabledStack}
				startFollowUserRequest={this.props.startFollowUserRequest}
				stopFollowUserRequest={this.props.stopFollowUserRequest}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.userPage.users,
		countOnPage: state.userPage.countOnPage,
		totalCountPage: state.userPage.totalCountPage,
		currentPage: state.userPage.currentPage,
		isFetching: state.userPage.isFetching,
		buttonsDisabledStack: state.userPage.buttonsDisabledStack,
	};
};

export default connect(mapStateToProps, {
	setCurrentPage,
	getUsers,
	startFollowUserRequest,
	stopFollowUserRequest,
})(UserContainer);
