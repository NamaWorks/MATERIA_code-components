import { useState, useEffect, useRef } from 'react';

export interface NavbarLinkProps {
  label?: string;
  href?: string;
  dropdownData?: string;
}

const hasDropdown = (val?: string) => !!val && val.toLowerCase() !== 'none';

export const NavbarLink = ({ label = 'LINK', href = '#', dropdownData }: NavbarLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showIndicator = hasDropdown(dropdownData);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const parent = linkRef.current?.parentElement;
    if (!parent || !showIndicator || !dropdownData) return;
    parent.setAttribute('dropdown-data', dropdownData);
    return () => {
      parent.removeAttribute('dropdown-data');
    };
  }, [showIndicator, dropdownData]);

  useEffect(() => {
    const parent = linkRef.current?.parentElement;
    if (!parent || !showIndicator) return;
    const sync = () => setIsOpen(parent.hasAttribute('data-dropdown-open'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(parent, { attributes: true, attributeFilter: ['data-dropdown-open'] });
    return () => observer.disconnect();
  }, [showIndicator]);

  return (
    <a
      ref={linkRef}
      href={href}
      className="flex items-center gap-[5px] font-['Helveticaneue'] text-[12px] font-normal text-white uppercase cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{label}</span>
      {showIndicator && (
        <span
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '11px',
            height: '11px',
            borderRadius: '1.3px',
            backgroundColor: '#0e0e0e',
            flexShrink: 0,
            filter: isOpen || hovered ? 'invert(1)' : 'invert(0)',
            transition: 'filter 300ms ease-out',
          }}
        >
          {!isOpen && (
            <span
              style={{
                position: 'absolute',
                left: '5px',
                top: '2.1px',
                width: '1px',
                height: '6.8px',
                backgroundColor: '#F9F8F5',
              }}
            />
          )}
          <span
            style={{
              position: 'absolute',
              left: '2.1px',
              top: '5px',
              width: '6.8px',
              height: '1px',
              backgroundColor: '#F9F8F5',
            }}
          />
        </span>
      )}
    </a>
  );
};
