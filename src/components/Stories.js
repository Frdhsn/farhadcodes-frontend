import React from 'react';
import classes from '../styles/Stories.module.css';
import Story from './Story';

export default function Stories({ posts, loading }) {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div className={classes.stories}>
      {posts.map((st) => (
        <Story key={st.id} post={st} />
      ))}
    </div>
  );
}
