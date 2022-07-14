import React from 'react';
import classes from '../styles/Form.module.css';
export default function Signup({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
