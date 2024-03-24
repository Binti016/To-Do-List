import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './profile.css';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfileData(); // Fetch profile data when component mounts
  }, []);
  console.log(profile);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:8000/user/profile'); // Assuming this endpoint returns the profile data for the logged-in user
      if (!response.ok) {
        throw new Error('Failed to fetch profile data.');
      }
      const profileData = await response.json();
      console.log('Profile Data:', profileData); // Log profile data to console for debugging
      setProfile(profileData);
    } catch (error){
      console.error('Error fetching profile data:', error);
    }
  };
  console.log(profile);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-page'>
      <Navbar />
      <div className='profile-container'>
        <div className='profile-header'>
          <h1>Welcome, {profile.name}</h1>
          <p>Email: {profile.email}</p>
          <p>Tasks Completed: {profile.tasksCompleted}</p>
          <p>Total Tasks: {profile.totalTasks}</p>
        </div>
        <div className='profile-picture'>
          <img src={profile.profilePicture} alt='Profile' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
