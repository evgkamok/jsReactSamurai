const ADD_POST = 'ADD-POST';

const initialState = {
	posts: [
		{ id: 1, postText: 'Post1 Post1 Post1 Post1 Post1 Post1 Post1 Post1 ' },
		{ id: 2, postText: 'Post2 Post2 Post2 Post2 Post2 Post2 Post2 Post2 ' },
		{ id: 3, postText: 'Post3 Post3 Post3 Post3 Post3 Post3 Post3 Post3 ' },
	],
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 5, postText: action.newPostText }],
			};
		default:
			return state;
	}
};

export const addPostCreate = (newPostText) => ({ type: ADD_POST, newPostText });

export default postsReducer;
