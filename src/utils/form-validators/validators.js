export const required = (value) => {
	return value ? undefined : 'Required';
};

export const mustBeNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);

export const maxLength = (maxLength) => (value) => {
	return value.length >= maxLength ? `Max length is ${maxLength} symbols` : undefined;
};

const minValue = (min) => (value) =>
	isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const composeValidators =
	(...validators) =>
	(value) =>
		validators.reduce((error, validator) => error || validator(value), undefined);
