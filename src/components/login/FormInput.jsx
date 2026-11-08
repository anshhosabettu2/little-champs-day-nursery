import React from 'react';

const FormInput = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = false,
  autoComplete,
}) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#9CA3AF]">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[52px] rounded-xl border border-[#E5E7EB] bg-white text-[14px] text-[#101B55] placeholder:text-[#9CA3AF] outline-none transition-all duration-150 focus:border-[#7147E8] focus:ring-4 focus:ring-[#7147E8]/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${
          Icon ? 'pl-11 pr-4' : 'px-4'
        }`}
      />
    </div>
  );
};

export default FormInput;
