import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Stories from '../Stories';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories');
      setPosts(res.data.data);
      //console.log(res.data.data);
    };
    fetchPosts();
  }, []);
  return <Stories posts={posts} />;
}
