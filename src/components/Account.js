import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Account.module.css';

export default function Account() {
  // const { currentUser } = useAuth();

  //console.log('testing ' + currentUser);

  return (
    <div className={classes.account}>
      {
        // /*currentUser ? (
        //   <>
        //     <span className="material-icons-outlined" title="Account">
        //       account_circle
        //     </span>

        //     {/* <span>{currentUser.username}</span> */}
        //     <span class="material-icons-outlined" title="Logout">
        //       {' '}
        //       logout{' '}
        //     </span>
        //   </>
        // ) :
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">/Login</Link>
        </>
      }
    </div>
  );
}
