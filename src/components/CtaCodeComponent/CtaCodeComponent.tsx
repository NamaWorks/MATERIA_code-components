// CTA prepared using code in order to add more dynamism and make it more appealing to the eye, making easier the attention grabbing function of it

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
      className="cta-arrow-path"
      pathLength="1"
      d="M12.5714 0.571442L15.4286 3.42858L12.5714 6.28573"
      stroke={color}
      strokeWidth="1.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className="cta-arrow-path"
      pathLength="1"
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

  return (
    <>
      <style>{`
        .cta-arrow-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }
        .cta-wrapper:hover .cta-arrow-path {
          animation: cta-draw 0.5s ease forwards;
        }
        @keyframes cta-draw {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>
      <div className="cta-wrapper group inline-flex items-center gap-[3px] cursor-pointer">
        <div
          className={`w-6 h-6 rounded-[1px] ${bg} flex items-center justify-center p-[2.29px] shrink-0 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,translate] duration-300 ease-in-out`}
        >
          <ArrowIcon color={iconColor} />
        </div>
        <div className={`rounded-[1px] ${bg} flex items-center justify-center px-2 py-[6px]`}>
          <span
            className={`font-['Helvetica_Neue'] text-[12px] font-normal uppercase tracking-[0.02em] leading-none ${textColor}`}
          >
            {title}
          </span>
        </div>
      </div>
    </>
  );
};
