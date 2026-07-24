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

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [qrVisible, setQrVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [screenshotBase64, setScreenshotBase64] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    teamName: '',
    player1: '',
    player2: '',
    player3: '',
    player4: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleQRCode = () => {
    setQrVisible(!qrVisible);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotBase64(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, teamName, player1, player2, player3, player4 } = formData;

    if (!email || !phone || !teamName || !player1 || !player2 || !player3 || !player4) {
      alert("Please fill in all fields.");
      return;
    }

    if (qrVisible && !screenshotBase64) {
      alert("Please upload the payment screenshot to complete offline registration.");
      return;
    }

    // Submit to Firebase Realtime Database
    set(ref(db, "teams-offline/" + teamName), {
      teamName: teamName,
      email: email,
      phoneNumber: phone,
      player1: player1,
      player2: player2,
      player3: player3,
      player4: player4,
      paymentScreenshot: screenshotBase64 || "none",
      submittedAt: new Date().toISOString(),
      status: qrVisible ? "pending_verification" : "unpaid"
    })
    .then(() => {
      alert("Your registration has been successfully submitted!");
      setFormData({
        email: '',
        phone: '',
        teamName: '',
        player1: '',
        player2: '',
        player3: '',
        player4: ''
      });
      setScreenshotBase64('');
      setFileName('');
      setQrVisible(false);
    })
    .catch((error) => {
      console.error("Database write error:", error);
      alert("Failed to submit registration.");
    });
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
        <h1 className="form-title">Register Here</h1>
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
                onChange={handleInputChange} 
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
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input 
                type="text" 
                id="teamName" 
                name="teamName" 
                value={formData.teamName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="right-form">
            <div className="form-group">
              <label htmlFor="player1">Player 1 Name (Leader)</label>
              <input 
                type="text" 
                id="player1" 
                name="player1" 
                value={formData.player1} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="player2">Player 2 Name</label>
              <input 
                type="text" 
                id="player2" 
                name="player2" 
                value={formData.player2} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="player3">Player 3 Name</label>
              <input 
                type="text" 
                id="player3" 
                name="player3" 
                value={formData.player3} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="player4">Player 4 Name</label>
              <input 
                type="text" 
                id="player4" 
                name="player4" 
                value={formData.player4} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <input 
            type="button" 
            value={qrVisible ? "Hide Payment Details" : "Pay Now (Scan QR)"} 
            onClick={toggleQRCode} 
            style={{ cursor: 'pointer' }} 
          />
        </div>

        {qrVisible && (
          <div className="payment-grid-wrapper">
            <div className="qr-code" id="qrCode">
              <h3>Scan QR Code to Pay</h3>
              <img src="/images/qr/QR.png" alt="QR Code" />
              <p>Pay ₹200 to complete registration.</p>
            </div>

            <div className="file-upload" id="fileUpload">
              <h3>Upload Payment Confirmation Screenshot</h3>
              <label htmlFor="file-upload" className="custom-file-upload">
                {fileName ? `File Selected: ${fileName}` : "Choose Screenshot File"}
              </label>
              <input 
                type="file" 
                id="file-upload" 
                name="payment-confirmation" 
                onChange={handleFileChange} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
            </div>
          </div>
        )}
      
        <div className="pay-now">
          <button type="submit">Submit Team</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
