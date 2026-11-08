import React from 'react';

const AboutCard = ({ name = "Aarav", about }) => {
  const defaultText = `${name} is a curious and confident child who loves exploring the outdoors and creative activities. He enjoys playing with friends and shows great problem-solving skills.`;

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E8ECF2] p-5 shadow-xs h-full">
      <h2 className="text-[16px] sm:text-[17px] font-bold text-[#172044] mb-3 tracking-tight">
        About {name}
      </h2>
      <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#5A6376] font-normal">
        {about || defaultText}
      </p>
    </div>
  );
};

export default AboutCard;

