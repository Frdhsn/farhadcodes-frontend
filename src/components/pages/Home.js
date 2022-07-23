import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Stories from '../Stories';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get('http://127.0.0.1:3005/api/v1/stories');
      setPosts(res.data.data);
      setloading(false);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Stories posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </>
  );
}
