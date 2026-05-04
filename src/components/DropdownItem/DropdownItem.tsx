// Item of a dropdown group with its animations already integrated and to be used in coordination with the Webflow CMS data

import { useState } from 'react';

export interface DropdownItemProps {
  index: string;
  label: string;
  description?: string;
}

const MOCK_DESCRIPTION =
  'Natural materials and refined craftsmanship come together to create spaces that are both timeless and contemporary. Each element is selected for its tactile quality and visual depth.';

const ArrowDownCircle = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`shrink-0 transition-transform duration-[var(--anim-duration)] ease-[var(--anim-ease)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <circle cx="7" cy="7" r="6.5" stroke="#0e0e0e" strokeWidth="1" />
    <line x1="7" y1="4" x2="7" y2="10" stroke="#0e0e0e" strokeWidth="1" strokeLinecap="round" />
    <path
      d="M5 8L7 10L9 8"
      stroke="#0e0e0e"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DropdownItem = ({
  index,
  label,
  description = MOCK_DESCRIPTION,
}: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#0e0e0e]">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex items-end justify-between w-full pb-[10px] cursor-pointer"
      >
        <div className="flex items-baseline gap-x-5">
          <span className="font-['Helvetica_Neue'] text-[12px] font-normal uppercase leading-[0.9] text-[#0e0e0e]">
            {index}
          </span>
          <span className="font-['Helvetica_Neue'] text-[16px] font-normal uppercase leading-[0.9] text-[#0e0e0e]">
            {label}
          </span>
        </div>
        <ArrowDownCircle isOpen={isOpen} />
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-[var(--anim-duration)] ease-[var(--anim-ease)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="font-['Helvetica_Neue'] text-[14px] font-normal leading-[1.4] text-[#0e0e0e] pt-[10px] pb-[10px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
