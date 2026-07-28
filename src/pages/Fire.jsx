import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import '../register.css';

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
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    player: '',
    playert: '',
    playertr: '',
    playerf: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        player4: playerf,
        submittedAt: new Date().toISOString()
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
    <div className="register-page-body">
      {loading && (
        <div id="loader" style={{ transition: 'all 0.7s ease', top: loading ? '0' : '-100%' }}>
          <div className="text-container">
            <div className="preloader">
              <div className="text-wrapper">
                <div className="text">
                  <span className="left" style={{ opacity: 1 }}>REGI</span>
                  <span className="right" style={{ opacity: 1 }}>STER</span>
                </div>
              </div>
              <div className="text-wrapper">
                <div className="text text-bottom">
                  <span className="up" style={{ opacity: 1 }}>YOUR</span>
                  <span className="up" style={{ opacity: 1 }}>TEAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <form className="container" onSubmit={handleSubmit}>
        <h1 className="form-title">Online Registration</h1>
        <div className="form-wrapper">
          {/* Left Side */}
          <div className="left-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Team Name</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="right-form">
            <div className="form-group">
              <label htmlFor="player">Player 1 Name (Leader)</label>
              <input 
                type="text" 
                id="player" 
                name="player" 
                value={formData.player} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="playert">Player 2 Name</label>
              <input 
                type="text" 
                id="playert" 
                name="playert" 
                value={formData.playert} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="playertr">Player 3 Name</label>
              <input 
                type="text" 
                id="playertr" 
                name="playertr" 
                value={formData.playertr} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="playerf">Player 4 Name</label>
              <input 
                type="text" 
                id="playerf" 
                name="playerf" 
                value={formData.playerf} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
        </div>
      
        <div className="pay-now">
          <button type="submit">Submit Registration</button>
        </div>
      </form>
    </div>
  );
};

export default Fire;
