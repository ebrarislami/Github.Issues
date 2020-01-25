import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.github.com/'
});

// Here we can add interceptor that will intercept each request and add Bearer token to it
// instance.interceptors.request.use(
// 	config => {
//         const token = 'access_token';
// 		config.headers.Authorization = `Bearer ${token}`;
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );

export default instance;
