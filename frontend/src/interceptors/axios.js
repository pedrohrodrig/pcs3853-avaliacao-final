import axios from "axios";
import Cookies from "js-cookie"
import urls from "../utils/urls";

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {

  if (error.response.status === 401 && !refresh) {
    refresh = true;

    const response = await axios.post(
      `${urls.baseURL}/token/refresh/`,
      {refresh: Cookies.get('refresh_token')},
      {headers: {'Content-Type': 'application/json'}},
      {withCredentials: true}
    )

    if (response.status === 200) {
      axios.defaults.headers.common['Authorization'] = `Bearer
      ${response.data['access']}`;

      Cookies.set('access_token', response.data.access);
      Cookies.set('refresh_token', response.data.refresh);

      return axios(error.config);
    }
  }

  refresh = false;

  return error;

});
