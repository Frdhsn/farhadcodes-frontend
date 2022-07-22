import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.jpg';
import { Context } from '../../contexts/Context';
import authService from '../../services/authService';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const userRef = useRef();
  //const passwordRef = useRef();

  const [error, setError] = useState('');

  //const { user, dispatch, isFetching } = useContext(Context);
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log('handling login');
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      setError('');
      const res = await authService.login(email, password).then(
        () => {
          navigate('/');
          window.location.reload();
        },
        (error) => {
          setError('Incorrect email or Password');
          console.log(error);
        }
      );

      dispatch({ type: 'LOGIN_SUCCESSS', payload: res.data.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      console.log(err);
    }
  };
  //console.log(user);
  // axios
  // .post(`http://127.0.0.1:3005/api/v1/users/login`, { email, password })
  // .then((res) => {
  //   console.log('res.data' + res.data);
  //   console.log('res.data.data' + res.data.data);
  //   console.log('res.data.data.user' + res.data.data.user);
  //   navigate('/');
  //   window.location.reload();
  //   dispatch({ type: 'LOGIN_SUCCESSS', payload: res.data.data });
  // })
  // .catch((err) => {
  //   dispatch({ type: 'LOGIN_FAILURE' });
  //   setError('error');
  // });
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={img} />
        <Form onSubmit={handleLogin} className={`${classes.login}`}>
          <TextInput
            required
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            required
            type="password"
            placeholder="Enter password"
            icon="lock"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={isFetching}>
            Login
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Login;
