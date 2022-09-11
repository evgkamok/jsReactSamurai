import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	},
});

export const userAPI = {
	getUsers(currentPage = 1, countOnPage = 25) {
		return axiosInstance
			.get(`users?page=${currentPage}&count=${countOnPage}`)
			.then((response) => response.data);
	},

	startFollow(userId) {
		return axiosInstance.post(`follow/${userId}`).then((response) => response);
	},

	stopFollow(userId) {
		return axiosInstance.delete(`follow/${userId}`).then((response) => response);
	},

	getUserProfileData(userId) {
		return axiosInstance.get(`profile/${userId}`);
	},
};

export const profileAPI = {
	getUserProfileStatus(userId) {
		return axiosInstance.get(`/profile/status/${userId}`);
	},

	updateUserProfileStatus(status) {
		return axiosInstance.put(`/profile/status/`, { status });
	},
};

export const userAuth = {
	authMe() {
		return axiosInstance.get(`auth/me`);
	},
};
