import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
