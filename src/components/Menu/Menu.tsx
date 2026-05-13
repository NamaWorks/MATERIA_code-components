import { useState, useRef, useEffect, ReactNode } from 'react';

// submenu: 'products' | 'projects' opens the matching dropdown panel; 'none' or null = no dropdown
export interface NavItem {
  name: string;
  slug: string;
  link: string;
  submenu?: 'products' | 'projects' | 'none' | null;
}

export interface MenuProps {
  logo?: ReactNode;
  navItems?: NavItem[];
}

const DropdownIndicator = ({ active }: { active: boolean }) => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="11" height="11" rx="1.30299" fill={active ? '#0E0E0E' : '#F9F8F5'} />
    <circle cx="5.50152" cy="5.49957" r="2.18511" fill={active ? '#F9F8F5' : '#0E0E0E'} />
  </svg>
);

export const Menu = ({ logo, navItems = [] }: MenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<'products' | 'projects' | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const scheduleClose = () => {
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const cancelClose = () => {
    clearTimeout(closeTimerRef.current);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimerRef.current);
  }, []);

  return (
    <nav className="w-full z-50" onMouseLeave={scheduleClose}>
      {/* Navbar */}
      <div className="w-full bg-[#3d3d3d] flex items-center justify-between px-[10px] pt-[8px] pb-[6px]">
        {/* Logo slot */}
        <div onMouseEnter={cancelClose}>{logo}</div>

        {/* Nav links */}
        <div className="flex items-center gap-[60px]" onMouseEnter={cancelClose}>
          {navItems.map((item) => {
            const hasSubmenu = item.submenu && item.submenu !== 'none';
            const isActive = openDropdown === item.submenu;

            return (
              <a
                key={item.slug}
                href={item.link}
                className="flex items-center gap-[5px] font-['Helvetica_Neue'] text-[12px] font-normal text-white uppercase tracking-normal transition-opacity duration-[var(--anim-duration)] ease-[var(--anim-ease)] hover:opacity-60"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenDropdown(hasSubmenu ? (item.submenu as 'products' | 'projects') : null);
                }}
              >
                {item.slug}
                {hasSubmenu && <DropdownIndicator active={isActive} />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Dropdown panel */}
      <div
        className={`grid transition-[grid-template-rows] duration-[var(--anim-duration)] ease-[var(--anim-ease)] ${
          openDropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        onMouseEnter={cancelClose}
      >
        <div className="overflow-hidden">
          <div className="w-full bg-black/90 backdrop-blur-[10px]">
            {/* Projects and products submenus will be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
};
