import Dialogs from './Dialogs';
import { postNewMessageCreate, updateTextMessageCreate } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
	listMessage: state.dialogsPage.dialogs,
	newTextMessage: state.dialogsPage.newTextMessage,
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
