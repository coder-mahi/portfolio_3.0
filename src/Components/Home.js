import React from 'react';
import './css/Home.css';
import profilePic from '../assets/profileimg.png'; // Ensure you have your photo in the images folder

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hello, I'm Mahesh Shinde</h1>
        <p>Welcome to my portfolio website. I’m passionate about coding, developing Android applications, web applications, and many more.</p>
        <img src={profilePic} alt="Mahesh Shinde" className="profile-pic" />
      </div>
    </div>
  );
}

export default Home;
