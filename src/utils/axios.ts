import axios from 'axios';
// import { API_URL } from './constants';

const $api = axios.create({
  baseURL: 'http://192.168.88.73:3000',
});

$api.interceptors.request.use(
  (config) => {
    // console.log(config)
    if (typeof window !== 'undefined') {
      // const token = localStorage.getItem('accessToken');
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImRpc3BsYXlfbmFtZSI6ImJla2phbjUiLCJlbWFpbCI6ImJla2phbjVAZ21haWwuY29tIiwiaWF0IjoxNjczMzM0Mjk3fQ.YTMyLFXxvWwSHBwXWoJxUfhV7HmZ2hYmO-cNdzyJb2k";
      if (token) {
        return {
          ...config,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  // async (error) => {
  //   console.log(error);

  //   const originalRequest = error.config;
  //   if (
  //     error.response.status == 401 &&
  //     error.config &&
  //     !error.config._isRetry
  //   ) {
  //     originalRequest._isRetry = true;
  //     try {
  //       const response = await $api.post(
  //         '/users/auth/jwt/refresh/',
  //         localStorage.getItem('refreshToken')
  //       );
  //       localStorage.setItem('accessToken', response.data.access);
  //       return $api.request(originalRequest);
  //     } catch (error) {
  //       return Promise.reject(error);
  //     }
  //   }
  //   throw error;
  // }
);

export default $api;
