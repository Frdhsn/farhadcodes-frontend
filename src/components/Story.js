import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/linkcut.png';
import classes from '../styles/Story.module.css';

export default function Story() {
  return (
    <Link to="stories">
      <div className={classes.story}>
        <img src={image} alt="" />
        <p>#1 Link Cut Tree Tutorial Bangla</p>
        <div className={classes.qmeta}>
          <p>30 min read</p>
          <p>Difficulty : Hard</p>
        </div>
      </div>
    </Link>
  );
}
