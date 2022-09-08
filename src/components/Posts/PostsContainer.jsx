import { connect } from 'react-redux';
import { addPostCreate, updatePostTextCreate } from '../../redux/posts-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => ({
	postsList: state.postsPage.posts,
	newPostText: state.postsPage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
	updatePostText: (e) => dispatch(updatePostTextCreate(e.target.value)),
	addPost: () => dispatch(addPostCreate()),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
