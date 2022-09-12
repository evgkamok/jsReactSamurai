const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
	dialogs: [
		{ id: 1, textMessage: 'First' },
		{ id: 2, textMessage: 'Second' },
		{ id: 3, textMessage: 'Third' },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				dialogs: [...state.dialogs, { id: 5, textMessage: action.newTextMessage }],
			};
		default:
			return state;
	}
};

export const postNewMessageCreate = (newTextMessage) => ({
	type: ADD_MESSAGE,
	newTextMessage,
});

export default dialogsReducer;
