import { connect } from 'react-redux';
import { addPostCreate } from '../../../redux/posts-reducer';
import ProfilePosts from './ProfilePosts';

const mapStateToProps = (state) => ({
	postsList: state.postsPage.posts,
});

const mapDispatchToProps = (dispatch) => ({
	addPost: (newPostText) => dispatch(addPostCreate(newPostText)),
});

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainer;
