import React from 'react';
import Dialogs from './Dialogs';
import { postNewMessageCreate, updateTextMessageCreate } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
	listMessage: state.dialogsPage.dialogs,
	newTextMessage: state.dialogsPage.newTextMessage,
	isAuth: state.authUser.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
	updateTextMessage: (e) => {
		const text = e.target.value;
		dispatch(updateTextMessageCreate(text));
	},
	addMessage: () => {
		dispatch(postNewMessageCreate());
	},
});

// const authRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
