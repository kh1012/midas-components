import React from 'react';

const JumoButton = ({ children, backgroundColor, fontColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
    >
      {children}
    </button>
  );
};

export default JumoButton;