import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
	return state.userPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter((u) => true);
});

export const getCountOnPage = (state) => {
	return state.userPage.countOnPage;
};
