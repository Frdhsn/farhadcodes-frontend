import axios from 'axios';
import { useEffect, useState } from 'react';
const getAllStories = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setposts] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories');
      setPosts(res.data.data);
      setloading(false);
    };
    fetchPosts();
  }, []);
  return posts;
};
const storyService = {
  getAllStories,
};
export default storyService;
