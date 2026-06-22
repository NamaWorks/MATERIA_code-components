// CTA prepared using code in order to add more dynamism and make it more appealing to the eye, making easier the attention grabbing function of it

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export interface CtaCodeComponentProps {
  title?: string;
  variant?: 'black' | 'light' | 'white';
}

const ArrowIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.5714 0.571442L15.4286 3.42858L12.5714 6.28573"
      stroke={color}
      strokeWidth="1.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.571428 10.2857V4.57145C0.571428 4.26834 0.691836 3.97765 0.906163 3.76332C1.12049 3.549 1.41118 3.42859 1.71429 3.42859H15.4286"
      stroke={color}
      strokeWidth="1.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CtaCodeComponent = ({
  title = 'Contacta ahora',
  variant = 'black',
}: CtaCodeComponentProps) => {
  const isDark = variant === 'black';
  const bg = isDark ? 'bg-[#0E0E0E]' : variant === 'white' ? 'bg-white' : 'bg-[#F2EEE9]';
  const textColor = isDark ? 'text-[#F2EEE9]' : 'text-[#0E0E0E]';
  const iconColor = isDark ? '#F2EEE9' : '#0E0E0E';

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const charsTop = wrapper.querySelectorAll<HTMLSpanElement>('.char-top');
    const charsBottom = wrapper.querySelectorAll<HTMLSpanElement>('.char-bottom');

    gsap.set(charsBottom, { y: '150%' });

    const tl = gsap.timeline({ paused: true });
    tl.to(charsTop, { y: '-100%', duration: 0.3, ease: 'power2.inOut', stagger: 0.015 }, 0).to(
      charsBottom,
      { y: '0%', duration: 0.3, ease: 'power2.inOut', stagger: 0.015 },
      0
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    wrapper.addEventListener('mouseenter', onEnter);
    wrapper.addEventListener('mouseleave', onLeave);

    return () => {
      wrapper.removeEventListener('mouseenter', onEnter);
      wrapper.removeEventListener('mouseleave', onLeave);
      tl.kill();
    };
  }, [title]);

  return (
    <div ref={wrapperRef} className="inline-flex items-center gap-[3px] cursor-pointer">
      <div
        className={`w-6 h-6 rounded-[1px] ${bg} flex items-center justify-center p-[2.29px] shrink-0`}
      >
        <ArrowIcon color={iconColor} />
      </div>
      <div className={`rounded-[1px] ${bg} flex items-center justify-center px-2 py-[6px]`}>
        <div className="relative overflow-hidden">
          <div className="flex">
            {title.split('').map((char, i) => (
              <span
                key={`top-${i}`}
                className={`char-top font-['Helveticaneue'] text-[14px] font-normal uppercase tracking-[0.02em] leading-none ${textColor} inline-block`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 flex">
            {title.split('').map((char, i) => (
              <span
                key={`bottom-${i}`}
                className={`char-bottom font-['Helveticaneue'] text-[14px] font-normal uppercase tracking-[0.02em] leading-none ${textColor} inline-block`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
