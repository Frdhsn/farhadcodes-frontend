import axios from 'axios';

const signUp = (name, email, password) => {
  return axios
    .post('http://127.0.0.1:3005/api/v1/users/signup', {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
const login = (email, password) => {
  return axios
    .post('http://127.0.0.1:3005/api/v1/users/login', {
      email,
      password,
    })
    .then((response) => {
      // console.log(response);
      console.log(response.data);
      // console.log(response.data.data);
      // console.log(response.data.data.token);
      if (response.data.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      //console.log(`response data ${response.data}`);
      return response.data.data;
    });
};
const logout = () => {
  localStorage.removeItem('user');
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  signUp,
  login,
  logout,
  getCurrentUser,
};
export default authService;
