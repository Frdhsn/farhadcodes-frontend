import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from '../contexts/Context';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PostStory from './pages/PostStory';
import Signup from './pages/SignUp';
import SingleStory from './pages/SingleStory';
import StoryByUser from './pages/StoryByUser';

const App = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/stories/:id" element={<SingleStory />} />
          <Route exact path="/stories/user/:id" element={<StoryByUser />} />
          <Route exact path="/write/" element={<PostStory />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
