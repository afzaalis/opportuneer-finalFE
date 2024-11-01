import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    console.log('Stored username:', storedUserName);  
  
    if (storedUserName) {
      setUserName(storedUserName);  
    } else {
      console.warn('No user name found in localStorage');
    }
  }, []);
  

  const Logout = () => {
    localStorage.removeItem('userName'); 
    navigate("/dashboard");
  };

  return (
    <div className="sidebar">
      <div className="profile-pic">
        <img src="../imgProfile/profileSidebar.png" alt="Profile" />
        <h2>{userName}</h2> 
        <p>Informatics Student at Telkom University</p>
      </div>
      <hr />
      <ul className="sidebar-options">
        <li>
          <NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Myprofile.png" alt="" />
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmark" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Bookmark.png" alt="" />
            Bookmark
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/Progress.png" alt="" />
            My Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/classes.png" alt="" />
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src="../imgSidebar/aboutus.png" alt="" />
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="info">
        <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Did you know?</h3>
        <p>
          With more and more companies turning to digital technology, Information Systems plays an
          important role in digital transformation. Students learn about cloud computing, big data, and
          artificial intelligence (AI), all of which are an important part of today's technological landscape.
        </p>
      </div>
      <div className="logout-btn">
        <button onClick={Logout}>Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;
