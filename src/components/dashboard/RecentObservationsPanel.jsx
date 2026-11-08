import React from 'react';
import aaravImg from '../../assets/obs-aarav.png';
import sophieImg from '../../assets/obs-sophie.png';
import lucasImg from '../../assets/obs-lucas.png';

const observationsData = [
  {
    id: 'aarav',
    name: 'Aarav',
    description: 'Exploring nature in the garden',
    time: '2 hours ago',
    image: aaravImg,
  },
  {
    id: 'sophie',
    name: 'Sophie',
    description: 'Creative art activity',
    time: '4 hours ago',
    image: sophieImg,
  },
  {
    id: 'lucas',
    name: 'Lucas',
    description: 'Building with blocks',
    time: '5 hours ago',
    image: lucasImg,
  },
];

const RecentObservationsPanel = ({ onViewAll }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E8ECF2] p-4 sm:p-5 shadow-xs h-full">
      {/* Header with Title and 'View all' Action */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="text-[17px] sm:text-[18px] font-bold text-[#172044] tracking-tight">
          Recent Observations
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[12.5px] sm:text-[13px] font-semibold text-[#7045E8] hover:text-[#582FD2] transition-colors cursor-pointer"
        >
          View all
        </button>
      </div>

      {/* Observations List */}
      <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-3.5">
        {observationsData.map((obs) => (
          <div
            key={obs.id}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Square Rounded Child Image */}
            <img
              src={obs.image}
              alt={obs.name}
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl object-cover flex-shrink-0 border border-[#F0F2F5] shadow-2xs group-hover:scale-[1.02] transition-transform"
            />

            {/* Observation Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#172044] group-hover:text-[#7045E8] transition-colors leading-tight">
                {obs.name}
              </h3>
              <p className="text-[12px] sm:text-[12.5px] font-normal text-[#5A6376] truncate mt-0.5 leading-snug">
                {obs.description}
              </p>
              <span className="text-[11px] font-normal text-[#9CA3AF] mt-0.5 block">
                {obs.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentObservationsPanel;

