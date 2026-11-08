import React from 'react';
import babyImg from '../../assets/room-baby.png';
import toddlersImg from '../../assets/room-toddlers.png';
import preschoolImg from '../../assets/room-preschool.png';

const roomsData = [
  {
    id: 'baby-room',
    name: 'Baby Room (0-2 yrs)',
    current: 6,
    capacity: 10,
    image: babyImg,
  },
  {
    id: 'toddlers',
    name: 'Toddlers (2-3 yrs)',
    current: 10,
    capacity: 12,
    image: toddlersImg,
  },
  {
    id: 'preschool',
    name: 'Preschool (3-5 yrs)',
    current: 10,
    capacity: 12,
    image: preschoolImg,
  },
];

const RoomOccupancyPanel = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E8ECF2] p-4 sm:p-5 shadow-xs h-full">
      {/* Panel Heading */}
      <h2 className="text-[17px] sm:text-[18px] font-bold text-[#172044] mb-3.5 tracking-tight">
        Room Occupancy
      </h2>

      {/* Rooms List */}
      <div className="flex-1 flex flex-col justify-between space-y-4 sm:space-y-4.5">
        {roomsData.map((room) => {
          const percentage = Math.round((room.current / room.capacity) * 100);

          return (
            <div key={room.id} className="flex items-center gap-3">
              {/* Illustrated Room Thumbnail */}
              <img
                src={room.image}
                alt={room.name}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 border border-[#F0F2F5] shadow-2xs"
              />

              {/* Room Details & Progress Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] sm:text-[13.5px] font-bold text-[#172044] truncate">
                    {room.name}
                  </span>
                  <span className="text-[12px] font-medium text-[#788195] ml-2">
                    {room.current}/{room.capacity}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 rounded-full bg-[#EFEFF5] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#7045E8] transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#7045E8] w-8 text-right">
                    {room.current}/{room.capacity}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomOccupancyPanel;

