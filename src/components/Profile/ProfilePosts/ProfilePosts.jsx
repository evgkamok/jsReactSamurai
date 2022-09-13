import React from 'react';
import style from './ProfilePosts.module.scss';
import { Field, reduxForm } from 'redux-form';
import { maxLengthField, requiredFiled } from '../../../utils/form-validators/validators';
import { FormControlCustomField } from '../../common/Preloader/FormsControl/FormsControl';

const controlMaxLengthField10 = maxLengthField(10);
const TextAreaNewPost = FormControlCustomField('textarea');

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={TextAreaNewPost}
				name={'addPostField'}
				placeholder={'Type here your new post'}
				validate={[requiredFiled, controlMaxLengthField10]}
				cols={35}
				rows={10}
			></Field>
			<button>Add Post</button>
		</form>
	);
};

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm);

const ProfilePosts = (props) => {
	const onSubmit = (formData) => {
		props.addPost(formData.addPostField);
	};

	const postList = props.postsList.map(({ id, postText }) => (
		<div key={id} className={style.post}>
			{postText}
		</div>
	));

	return (
		<div className={style.wrapper}>
			<div className={style.addPost}>
				<AddPostReduxForm onSubmit={onSubmit} />
			</div>
			<div className={style.showPosts}>{postList}</div>
		</div>
	);
};

export default ProfilePosts;
