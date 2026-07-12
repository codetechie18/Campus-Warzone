import React, { useState, useEffect } from 'react';
import '../register.css';

const Register = () => {
  const [loading, setLoading] = useState(true);
  const [qrVisible, setQrVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleQRCode = () => {
    setQrVisible(!qrVisible);
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

      <div className="container">
        <h1 className="form-title">Register Here</h1>
        <div className="form-wrapper">
          {/* Left Side */}
          <div className="left-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number:</label>
              <input type="tel" id="mobile" name="mobile" required />
            </div>
            <div className="form-group">
              <label htmlFor="team-name">Team Name:</label>
              <input type="text" id="team-name" name="team-name" required />
            </div>
          </div>

          {/* Right Side */}
          <div className="right-form">
            <div className="form-group">
              <label htmlFor="player1-name">Player 1 Name:</label>
              <input type="text" id="player1-name" name="player1-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="player2-name">Player 2 Name:</label>
              <input type="text" id="player2-name" name="player2-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="player3-name">Player 3 Name:</label>
              <input type="text" id="player3-name" name="player3-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="player4-name">Player 4 Name:</label>
              <input type="text" id="player4-name" name="player4-name" required />
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <input type="button" value="Pay Now" onClick={toggleQRCode} style={{ cursor: 'pointer' }} />
        </div>

        <div className="qr-code" id="qrCode" style={{ display: qrVisible ? 'block' : 'none' }}>
          <h3>Scan QR Code to Pay</h3>
          <img src="/images/qr/QR.png" alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
          <p>Pay ₹200 to complete registration.</p>
        </div>

        <div className="file-upload" id="fileUpload" style={{ display: qrVisible ? 'block' : 'none' }}>
          <h3>Upload Payment Confirmation Screenshot</h3>
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose File
          </label>
          <input type="file" id="file-upload" name="payment-confirmation" required style={{ display: 'none' }} />
        </div>
      
        <div className="pay-now">
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
