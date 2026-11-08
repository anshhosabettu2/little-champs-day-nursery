import React, { useState, useRef, useEffect } from 'react';
import portraitImg from '../../assets/aarav-portrait.png';

const PencilIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const MoreVerticalIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

const ChildProfileHeader = ({ child, onEdit }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-7">
      {/* Left: Avatar + Details */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Child Portrait */}
        <div className="relative flex-shrink-0">
          <img
            src={portraitImg}
            alt={child?.name || "Aarav Sharma"}
            className="w-24 h-24 sm:w-26 sm:h-26 lg:w-28 lg:h-28 rounded-full object-cover shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-3 ring-white"
          />
        </div>

        {/* Child Details */}
        <div className="flex flex-col text-left">
          <h1 className="text-xl sm:text-[25px] font-bold text-[#172044] leading-tight tracking-tight">
            {child?.name || "Aarav Sharma"}
          </h1>
          <div className="mt-1 space-y-0.5 text-[12.5px] sm:text-[13px] text-[#5A6376]">
            <p>
              Date of birth:{' '}
              <span className="font-normal text-[#5A6376]">
                {child?.dob || "12 Mar 2023"} ({child?.age || "Age 3y 7m"})
              </span>
            </p>
            <p>
              Room:{' '}
              <span className="font-normal text-[#5A6376]">
                {child?.room || "Preschool (3-5 years)"}
              </span>
            </p>
            <p>
              Key Person:{' '}
              <span className="font-medium text-[#172044]">
                {child?.keyPerson || "Sarah Khan"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 self-end sm:self-center relative" ref={menuRef}>
        {/* Edit Profile Button */}
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7045E8] hover:bg-[#5E33D6] text-white text-[13px] font-semibold shadow-[0_3px_10px_rgba(112,69,232,0.25)] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <PencilIcon className="w-3.5 h-3.5" />
          <span>Edit Profile</span>
        </button>

        {/* Three-Dot Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-8.5 h-8.5 rounded-xl bg-white border border-[#E5E7EB] text-[#5A6376] hover:bg-gray-50 hover:text-[#172044] shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
          aria-label="More actions"
        >
          <MoreVerticalIcon className="w-3.5 h-3.5" />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-11 z-30 w-44 rounded-xl bg-white p-1.5 shadow-xl border border-gray-100 animate-in fade-in zoom-in-95 duration-100 text-left">
            <button
              type="button"
              onClick={() => { setMenuOpen(false); alert('Printing profile summary...'); }}
              className="flex w-full items-center px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-[#F8FAFD] rounded-lg transition-colors cursor-pointer"
            >
              Print Profile
            </button>
            <button
              type="button"
              onClick={() => { setMenuOpen(false); alert('Exporting PDF record...'); }}
              className="flex w-full items-center px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-[#F8FAFD] rounded-lg transition-colors cursor-pointer"
            >
              Export PDF
            </button>
            <button
              type="button"
              onClick={() => { setMenuOpen(false); alert('Sharing with parent...'); }}
              className="flex w-full items-center px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-[#F8FAFD] rounded-lg transition-colors cursor-pointer"
            >
              Share with Parent
            </button>
            <div className="my-1 border-t border-gray-100" />
            <button
              type="button"
              onClick={() => { setMenuOpen(false); alert('Archive child record'); }}
              className="flex w-full items-center px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            >
              Archive Record
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChildProfileHeader;
