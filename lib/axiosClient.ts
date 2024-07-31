import axios from 'axios';
import { signOut } from "next-auth/react";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = document.cookie.match(/next-auth\.session-token=([^;]*)/)?.[1];
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      signOut({ callbackUrl: '/' });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
