import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from '../../styles/SingleStory.module.css';

export default function SingleStory() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories/' + path);
      setPost(res.data.data);
    };
    fetchPosts();
  }, [path]);

  const path2 = post.authorID;
  useEffect(() => {
    const fetchUsername = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/users/' + path2);
      setUser(res.data.data);
    };
    fetchUsername();
  }, [path2]);
  const navigate = useNavigate();
  const showAllStory = () => {
    navigate('/stories/user/' + post.authorID);
  };
  return (
    <>
      <div className={`${classes.singlePost}`}>
        <div className={`${classes.singlePostWrapper}`}>
          <h1 className={`${classes.singlePostTitle}`}>{post.title}</h1>

          <div className={`${classes.singlePostInfo}`}>
            <span
              title="Click to see all blogs of this user"
              className={`${classes.singlePostAuthor}`}
              onClick={showAllStory}
            >
              Author: {user.name}
            </span>
            <div>
              <span className={`${classes.singlePostDate}`}>
                Created At: {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>

          <div>
            <p className={`${classes.singlePostDesc}`}>{post.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
