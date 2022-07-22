import axios from 'axios';
const signUp = (name, email, password) => {
  console.log(`signup a ashchi`);
  return axios
    .post('http://127.0.0.1:3005/api/v1/users/signup', {
      name,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.data.data);
      console.log(response.data.data.token);

      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
const login = async (email, password) => {
  try {
    console.log('came login');
    const response = await axios.post(
      'http://127.0.0.1:3005/api/v1/users/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      }
    );
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (err) {
    console.log(err);
  }

  // return axios
  //   .post(
  //     'http://127.0.0.1:3005/api/v1/users/login',
  //     {
  //       email,
  //       password,
  //     },
  //     { withCredentials: true }
  //   )
  //   .then((response) => {
  //     console.log('response')
  //     console.log(response);
  //     //console.log(response.data);
  //     // console.log(response.data.data);
  //     // console.log(response.data.data.token);
  //     if (response.data.data) {
  //       localStorage.setItem('user', JSON.stringify(response.data));
  //     }
  //     console.log(`response data ${response.data}`);
  //     return response.data;
  //   });
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
