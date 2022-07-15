import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.jpg';
import authService from '../../services/authService';
import classes from '../../styles/Login.module.css';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log(`printing ${e}`);
    e.preventDefault();
    try {
      await authService.login(email, password).then(
        () => {
          navigate('/');
          //window.location.reload();
        },
        (error) => {
          setError('Incorrect email or Password');
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            required
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit Now</button>

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
