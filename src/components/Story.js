import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/linkcut.png';
import classes from '../styles/Story.module.css';

export default function Story({ post }) {
  //console.log(post);
  return (
    <Link to={`stories/${post.id}`}>
      <div className={classes.story}>
        <img src={image} alt="" />
        <p>
          {post.id}# {post.title}
        </p>
        <div className={classes.qmeta}>
          <p>Topic: {post.topic}</p>
        </div>
        <div className={classes.desc}>Description: {post.description}</div>
        <div>
          <p> Difficulty : {post.difficulty}</p>
          <p>Created At: {new Date(post.createdAt).toDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
