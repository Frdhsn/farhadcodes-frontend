import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Stories from '../Stories';

export default function StoryByUser() {
  console.log(`story by user a asi`);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories/user/' + id);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  console.log(`stories a dicchi`);
  return <Stories posts={posts} />;
}
