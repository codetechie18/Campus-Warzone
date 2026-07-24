import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="loader" 
      style={{ 
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none'
      }}
    >
      <div className="text-container">
        <svg
          className="text-stroke"
          viewBox="0 0 1000 150"
          width="90%"
          height="100%"
        >
          <text className="text1" x="50%" y="55" textAnchor="middle">CAMPUS WARZONE</text>
          <text className="text2" x="50%" y="130" textAnchor="middle">GHR SPECIAL</text>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
