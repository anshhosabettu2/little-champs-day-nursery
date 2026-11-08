import React, { useState } from 'react';

const EditProfileModal = ({ isOpen, onClose, child, onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: child?.name || 'Aarav Sharma',
    dob: child?.dob || '12 Mar 2023',
    room: child?.room || 'Preschool (3-5 years)',
    keyPerson: child?.keyPerson || 'Sarah Khan',
    allergies: child?.allergies || 'None',
    dietary: child?.dietary || 'Vegetarian',
    additionalNeeds: child?.additionalNeeds || 'None',
    emergencyContact: child?.emergencyContact || '07412 345678',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#172044]">Edit Child Profile</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Room</label>
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Key Person</label>
              <input
                type="text"
                name="keyPerson"
                value={formData.keyPerson}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Dietary</label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#172044] mb-1">Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-[#172044] outline-none focus:border-[#7045E8] focus:ring-2 focus:ring-[#7045E8]/10"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#7045E8] hover:bg-[#5E33D6] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;

