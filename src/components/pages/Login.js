import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login.jpg';
import classes from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../Textinput';

export default function Login(props) {
  console.log('checking');
  console.log(props);
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={img} />
        <Form className={`${classes.login}`}>
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>Submit Now</Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
