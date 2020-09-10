import axios from 'axios';

const BASE_URL= 'https://api.density.io/v2/';
const TOKEN= 'tok_KOcggRz4zULjCXCLHUkmRamnv1KLNnSxEzhTUDpqswL';

// Global axios defaults
axios.defaults.timeout = 10000;
axios.defaults.params = {};
axios.defaults.baseURL = BASE_URL;

const axiosInstance = axios.create();

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common.Accept = 'application/json';

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers.Authorization = `Bearer ${TOKEN}`;

		return config;
	},
	(error) => Promise.reject(error),
);

export default axiosInstance;
