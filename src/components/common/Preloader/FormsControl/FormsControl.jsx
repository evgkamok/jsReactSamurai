import React from 'react';
import style from './FormsControl.module.scss';

export const TextAreaValidate = ({ input, meta, ...props }) => {
	const { error, touched } = meta;
	return (
		<div>
			<div>
				<textarea {...input} {...props} className={touched && error ? style.error : ''} />
			</div>
			{touched && error && <span className={style.errorMessage}>{error}</span>}
		</div>
	);
};

export const InputValidate = ({ input, meta, ...props }) => {
	const { error, touched } = meta;
	return (
		<div>
			<div>
				<input {...input} {...props} className={touched && error ? style.error : ''} />
			</div>
			{touched && error && <span className={style.errorMessage}>{error}</span>}
		</div>
	);
};

export const FormControlCustomField =
	(Element) =>
	({ input, meta, ...props }) => {
		const { error, touched } = meta;
		return (
			<div>
				<div>
					<Element {...input} {...props} className={touched && error ? style.error : ''} />
				</div>
				{touched && error && <span className={style.errorMessage}>{error}</span>}
			</div>
		);
	};
