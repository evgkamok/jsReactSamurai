import { connect } from 'react-redux';
import { addPostCreate, updatePostTextCreate } from '../../../redux/posts-reducer';
import ProfilePosts from './ProfilePosts';

const mapStateToProps = (state) => ({
	postsList: state.postsPage.posts,
	newPostText: state.postsPage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
	updatePostText: (e) => dispatch(updatePostTextCreate(e.target.value)),
	addPost: () => dispatch(addPostCreate()),
});

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;
