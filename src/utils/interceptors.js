import axios from 'axios';
import { API_KEY } from './constants';

export function interceptor() {
  axios.interceptors.request.use(
    (req) => {
      // Do something before request is sent
      req.params = { api_key: API_KEY };

      return req;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}
