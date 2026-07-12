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
    <div id="loader" style={{ top: visible ? '0' : '-100%' }}>
      <div className="text-container">
        <svg
          className="text-stroke"
          viewBox="0 0 900 100"
          width="80%"
          height="100%"
        >
          <text className="text1" x="10%" y="45%">CAMPUS WARZONE</text>
          <text className="text2" x="22%" y="110">GHR SPECIAL</text>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
