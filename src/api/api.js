import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '07627da6-9991-4d1c-9eec-29526addab6c',
	},
});

const userAPI = {
	getUsers(currentPage = 1, countOnPage = 25) {
		return axiosInstance
			.get(`users?page=${currentPage}&count=${countOnPage}`)
			.then((response) => response.data);
	},

	followUser(userId) {
		return axiosInstance.post(`follow/${userId}`).then((response) => response);
	},

	noFollowUser(userId) {
		return axiosInstance.delete(`follow/${userId}`).then((response) => response);
	},
};

export default userAPI;
