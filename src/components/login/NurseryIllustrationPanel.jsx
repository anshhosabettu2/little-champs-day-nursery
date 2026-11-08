import React from 'react';
import loginBanner from '../../assets/login-banner.png';

const NurseryIllustrationPanel = () => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden bg-[#EBF2F9] h-full min-h-[580px] w-full">
      {/* Visual Banner */}
      <img
        src={loginBanner}
        alt="Little Champs Day Nursery - Together We Nurture Brighter Futures"
        className="w-full h-full object-cover object-top select-none pointer-events-none"
        draggable={false}
      />

      {/* Accessible semantic heading for screen readers */}
      <div className="sr-only">
        <h2>Little Champs Day Nursery</h2>
        <p>Together We Nurture Brighter Futures</p>
        <p>A safe, happy and inspiring place for children to learn, grow and thrive.</p>
      </div>
    </div>
  );
};

export default NurseryIllustrationPanel;
