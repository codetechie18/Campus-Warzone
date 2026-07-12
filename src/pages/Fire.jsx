import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91KR6XN-tDs1CBbBcYo7AGXEGhaErmSQ",
  authDomain: "warezonereal.firebaseapp.com",
  databaseURL: "https://warezonereal-default-rtdb.firebaseio.com",
  projectId: "warezonereal",
  storageBucket: "warezonereal.appspot.com",
  messagingSenderId: "82417617798",
  appId: "1:82417617798:web:03adf24b3d4ae13813fa07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Fire = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    player: '',
    playert: '',
    playertr: '',
    playerf: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, player, playert, playertr, playerf } = formData;

    if (username && email && phone && player && playert && playertr && playerf) {
      set(ref(db, "teams/" + username), {
        username: username,
        email: email,
        phoneNumber: phone,
        player1: player,
        player2: playert,
        player3: playertr,
        player4: playerf
      })
      .then(() => {
        alert("You have successfully registered!");
        setFormData({
          username: '',
          email: '',
          phone: '',
          player: '',
          playert: '',
          playertr: '',
          playerf: ''
        });
      })
      .catch((error) => {
        console.error("Error writing to database:", error);
        alert("Failed to submit data.");
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fire-page-body">
      <div className="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit} id="registrationForm">
          <div className="form-grid">
            <div className="inputbox">
              <input 
                type="text" 
                id="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
              <span>Team Name</span>
            </div>
            <div className="inputbox">
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <input 
                type="text" 
                id="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              <span>Phone Number</span>
            </div>
            <div className="inputbox">
              <input 
                type="text" 
                id="player" 
                value={formData.player} 
                onChange={handleChange} 
                required 
              />
              <span>Player 1 (Leader)</span>
            </div>
            <div className="inputbox">
              <input 
                type="text" 
                id="playert" 
                value={formData.playert} 
                onChange={handleChange} 
                required 
              />
              <span>Player 2</span>
            </div>
            <div className="inputbox">
              <input 
                type="text" 
                id="playertr" 
                value={formData.playertr} 
                onChange={handleChange} 
                required 
              />
              <span>Player 3</span>
            </div>
            <div className="inputbox">
              <input 
                type="text" 
                id="playerf" 
                value={formData.playerf} 
                onChange={handleChange} 
                required 
              />
              <span>Player 4</span>
            </div>
          </div>
          <div className="btn-submit-container">
            <input type="submit" value="Submit" id="submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fire;
