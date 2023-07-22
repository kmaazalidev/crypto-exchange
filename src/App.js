import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Blogs from './Components/Blogs';


const App = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') || '[]'));
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn') || 'false'));
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || 'null'));

  // Load users data from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('users') || '[]';
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn') || 'false';
    if (isLoggedIn) {
      setIsLoggedIn(JSON.parse(isLoggedIn));
    }

    const currentUser = localStorage.getItem('currentUser') || 'null';
    if (currentUser) {
      setCurrentUser(JSON.parse(currentUser));
    }
  }, []);

  // Update localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // Update localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  // Update localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        {/* Logged In URLs */}
        <Route path="/" element={ 
          <ProtectedRoute isAllowed={isLoggedIn}>
            <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />
          </ProtectedRoute> 
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute isAllowed={isLoggedIn}>
            <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} />
          </ProtectedRoute> 
        }/>
        <Route path="/blogs" element={
          <ProtectedRoute isAllowed={isLoggedIn}>
            <Blogs />
          </ProtectedRoute> 
        }/>

        {/* Non Logged In URLs */}
        <Route path="/login" element={<Login users={users} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;