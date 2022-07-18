import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';
import classes from './../styles/Account.module.css';

export default function Account() {
  const { user, dispatch } = useContext(Context);

  // console.log('testing ' + user);
  // console.log('testing ' + user.data);
  // console.log('testing ' + user.data.email);
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className={classes.account}>
      {user ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{user.data.email}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {' '}
            logout{' '}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
