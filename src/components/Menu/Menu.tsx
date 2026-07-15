import { useState, useRef, useEffect, ReactNode } from 'react';

export interface MenuProps {
  logo?: ReactNode;
  navLinks?: ReactNode;
  navOpacity?: number;
  navColor?: string;
  proyectosContent?: ReactNode;
  productosContent?: ReactNode;
  navMaxWidth?: number;
}

export const Menu = ({
  logo,
  navLinks,
  navOpacity = 90,
  navColor = '#0e0e0e',
  proyectosContent,
  productosContent,
  navMaxWidth = 1512,
}: MenuProps) => {
  const [openDropdown, setOpenDropdown] = useState<'products' | 'projects' | null>(null);
  const openRef = useRef<'products' | 'projects' | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const switchTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const navLinksRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const proyectasWrapperRef = useRef<HTMLDivElement>(null);
  const productosWrapperRef = useRef<HTMLDivElement>(null);

  const backdropBackground =
    navColor.startsWith('#')
      ? `${navColor}${Math.round((navOpacity / 100) * 255)
          .toString(16)
          .padStart(2, '0')}`
      : navColor;

  useEffect(() => {
    const navLinksEl = navLinksRef.current;
    const navEl = navRef.current;
    if (!navLinksEl || !navEl) return;

    const open = (val: 'products' | 'projects' | null) => {
      openRef.current = val;
      setOpenDropdown(val);
    };

    const handleMouseOver = (e: MouseEvent) => {
      clearTimeout(closeTimerRef.current);
      clearTimeout(switchTimerRef.current);
      const navItem = (e.target as HTMLElement).closest?.('[dropdown-data]');
      const submenu = navItem?.getAttribute('dropdown-data')?.toLowerCase() ?? null;
      const next = submenu === 'products' || submenu === 'projects' ? submenu : null;

      if (next && openRef.current && openRef.current !== next) {
        open(null);
        switchTimerRef.current = setTimeout(() => open(next), 300);
      } else {
        open(next);
      }
    };

    const handleMouseLeave = () => {
      clearTimeout(switchTimerRef.current);
      closeTimerRef.current = setTimeout(() => open(null), 150);
    };

    const handlePanelMouseEnter = () => {
      clearTimeout(closeTimerRef.current);
      clearTimeout(switchTimerRef.current);
    };

    navLinksEl.addEventListener('mouseover', handleMouseOver);
    navEl.addEventListener('mouseleave', handleMouseLeave);

    const panels = navEl.querySelectorAll('[data-dropdown-panel]');
    panels.forEach((p) => p.addEventListener('mouseenter', handlePanelMouseEnter));

    return () => {
      navLinksEl.removeEventListener('mouseover', handleMouseOver);
      navEl.removeEventListener('mouseleave', handleMouseLeave);
      panels.forEach((p) => p.removeEventListener('mouseenter', handlePanelMouseEnter));
      clearTimeout(closeTimerRef.current);
      clearTimeout(switchTimerRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-center self-center overflow-visible"
    >
      {/* Background for the elements */}
      <div
        className="absolute inset-0 h-full w-[100dvw] pointer-events-none"
        style={{
          backgroundColor: backdropBackground,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1,
        }}
      ></div>
      {/* Navbar bar */}
      <div
        id="navbar__navigation"
        className="relative z-[2] flex w-full items-center justify-between px-[10px] pt-[8px] pb-[6px]"
        style={{ maxWidth: `${navMaxWidth}px` }}
      >
        <div>{logo}</div>
        <div ref={navLinksRef} className="flex items-center gap-[60px]">
          {navLinks}
        </div>
      </div>

      {/* Dropdown panels — absolute, overlays page content below the navbar bar */}
      <div className="absolute top-full left-0 w-full">
        {/* Proyectos panel — wrapper animates height using scrollHeight of its content */}
        <div
          ref={proyectasWrapperRef}
          data-dropdown-panel
          data-open={openDropdown === 'projects' ? '' : undefined}
          style={{
            overflow: 'hidden',
            height:
              openDropdown === 'projects'
                ? `${proyectasWrapperRef.current?.scrollHeight ?? 0}px`
                : '0px',
            transition: 'height 300ms ease-in-out',
          }}
        >
          <div className="w-full bg-[#0e0e0eb3]/0 backdrop-blur-[0px] mt-[10px]">
            {proyectosContent}
          </div>
        </div>

        {/* Productos panel */}
        <div
          ref={productosWrapperRef}
          data-dropdown-panel
          data-open={openDropdown === 'products' ? '' : undefined}
          style={{
            overflow: 'hidden',
            height:
              openDropdown === 'products'
                ? `${productosWrapperRef.current?.scrollHeight ?? 0}px`
                : '0px',
            transition: 'height 300ms ease-in-out',
          }}
        >
          <div className="w-full bg-[#0e0e0eb3]/0 backdrop-blur-[0px] mt-[10px] px-[10px] py-[30px]">
            {productosContent}
          </div>
        </div>
      </div>
    </nav>
  );
};
