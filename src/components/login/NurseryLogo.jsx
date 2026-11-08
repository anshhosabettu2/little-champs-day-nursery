import React from 'react';
import logoImg from '../../assets/little-champs-logo.png';

const NurseryLogo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img
        src={logoImg}
        alt="Little Champs Day Nursery"
        className="h-20 lg:h-22 w-auto object-contain select-none"
        draggable={false}
      />
    </div>
  );
};

export default NurseryLogo;

