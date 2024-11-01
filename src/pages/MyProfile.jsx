import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/myprofile.css'

const MyProfile = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <h1>My Profile</h1>
        <p>ini my profile</p>
      </div>
    </div>
  );
}

export default MyProfile;
