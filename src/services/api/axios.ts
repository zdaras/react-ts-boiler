import axios from 'axios';

const baseURL = process.env.API_BASE_URL;
const authToken = String(process.env.AUTH_TOKEN);

const instance = axios.create({ baseURL });

export const setAuthHeader = (token: string) => {
	instance.defaults.headers.common[authToken] = token; // set on getCurrentUser success action
};

export const deleteAuthHeader = () => {
	delete instance.defaults.headers.common[authToken]; // remove on logout action
};

export const { get, post, put, delete: del } = instance;

export default instance;
