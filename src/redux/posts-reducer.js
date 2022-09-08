const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
	posts: [
		{ id: 1, postText: 'Post1 Post1 Post1 Post1 Post1 Post1 Post1 Post1 ' },
		{ id: 2, postText: 'Post2 Post2 Post2 Post2 Post2 Post2 Post2 Post2 ' },
		{ id: 3, postText: 'Post3 Post3 Post3 Post3 Post3 Post3 Post3 Post3 ' },
	],
	newPostText: '',
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 5, postText: state.newPostText }],
				newPostText: '',
			};
		case UPDATE_POST_TEXT:
			return {
				...state,
				newPostText: action.payload,
			};
		default:
			return state;
	}
};

export const updatePostTextCreate = (payload) => ({
	type: UPDATE_POST_TEXT,
	payload,
});

export const addPostCreate = () => ({ type: ADD_POST });

export default postsReducer;
