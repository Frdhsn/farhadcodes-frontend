import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/signup.jpg';
import authService from '../../services/authService';
import classes from '../../styles/Signup.module.css';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    try {
      await authService.signUp(username, email, password).then(
        (response) => {
          navigate('/'); // home page
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={img} />

        <Form onSubmit={handleSignUp} className={`${classes.signup}`}>
          <TextInput
            required
            value={username}
            type="text"
            placeholder="Enter name"
            icon="person"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextInput
            required
            value={email}
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            required
            value={password}
            type="password"
            placeholder="Enter password"
            icon="lock"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            required
            value={confirmPassword}
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Checkbox required text="I agree to the Terms &amp; Conditions" />

          <button type="submit">Submit Now</button>

          {error && <p className="error">{error}</p>}
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Signup;
