import { useState, useEffect, useRef } from 'react';

export interface NavbarLinkProps {
  label?: string;
  href?: string;
  dropdownData?: string;
}

const hasDropdown = (val?: string) => !!val && val.toLowerCase() !== 'none';

export const NavbarLink = ({ label = 'LINK', href = '#', dropdownData }: NavbarLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const showIndicator = hasDropdown(dropdownData);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const parent = linkRef.current?.parentElement;
    if (!parent || !showIndicator || !dropdownData) return;
    parent.setAttribute('dropdown-data', dropdownData);
    return () => { parent.removeAttribute('dropdown-data'); };
  }, [showIndicator, dropdownData]);

  return (
    <a
      ref={linkRef}
      href={href}
      className="flex items-center gap-[5px] font-['Helvetica_Neue'] text-[12px] font-normal text-white uppercase cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{label}</span>
      {showIndicator && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '11px',
            height: '11px',
            borderRadius: '1.3px',
            backgroundColor: '#F9F8F5',
            flexShrink: 0,
            filter: hovered ? 'invert(0)' : 'invert(1)',
            transition: 'filter 300ms ease-out',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '4.4px',
              height: '4.4px',
              borderRadius: '50%',
              backgroundColor: '#0e0e0e',
            }}
          />
        </span>
      )}
    </a>
  );
};
