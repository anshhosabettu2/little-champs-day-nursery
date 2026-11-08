import React from 'react';

const AllergyIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const DietaryIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const NeedsIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ContactIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const KeyInfoCard = ({ info }) => {
  const items = [
    {
      label: 'Allergies',
      value: info?.allergies || 'None',
      icon: AllergyIcon,
    },
    {
      label: 'Dietary',
      value: info?.dietary || 'Vegetarian',
      icon: DietaryIcon,
    },
    {
      label: 'Additional Needs',
      value: info?.additionalNeeds || 'None',
      icon: NeedsIcon,
    },
    {
      label: 'Emergency Contact',
      value: info?.emergencyContact || '07412 345678',
      icon: ContactIcon,
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-[#E8ECF2] p-5 shadow-xs h-full">
      <h2 className="text-[16px] sm:text-[17px] font-bold text-[#172044] mb-3 tracking-tight">
        Key Information
      </h2>
      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 text-[13px] sm:text-[13.5px]">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFF0F0] text-[#EA5B5B] flex-shrink-0">
                <Icon className="w-3 h-3" />
              </div>
              <p className="truncate">
                <span className="font-semibold text-[#172044]">{item.label}:</span>{' '}
                <span className="font-normal text-[#5A6376]">{item.value}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyInfoCard;

