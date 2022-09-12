import Dialogs from './Dialogs';
import { postNewMessageCreate } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
	listMessage: state.dialogsPage.dialogs,
});

const mapDispatchToProps = (dispatch) => ({
	addMessage: (newTextMessage) => {
		dispatch(postNewMessageCreate(newTextMessage));
	},
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
