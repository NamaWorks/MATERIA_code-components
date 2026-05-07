// Carousel to be used on galleries that will autoplay and carousel of logos or similar

import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';

export interface CarouselProps {
  children?: ReactNode;
  arrows?: boolean;
  speed?: number;
}

export const Carousel = ({ children, arrows = false, speed = 1 }: CarouselProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ x: 0, speed: { value: 1 }, totalWidth: 0 });

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const state = stateRef.current;
    state.totalWidth = track.scrollWidth / 2;
    const baseSpeed = speed;
    let touchStartX = 0;

    const tick = () => {
      state.x -= baseSpeed * state.speed.value;
      if (Math.abs(state.x) >= state.totalWidth) state.x += state.totalWidth;
      gsap.set(track, { x: state.x });
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onEnter = () => gsap.to(state.speed, { value: 0, duration: 0.5, ease: 'power2.out' });
    const onLeave = () => gsap.to(state.speed, { value: 1, duration: 0.5, ease: 'power2.in' });

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      gsap.killTweensOf(state.speed);
      state.speed.value = 0;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      state.x -= diff;
      if (state.x > 0) state.x -= state.totalWidth;
      if (Math.abs(state.x) >= state.totalWidth) state.x += state.totalWidth;
      gsap.to(state.speed, { value: 1, duration: 0.5, ease: 'power2.in' });
    };

    wrapper.addEventListener('mouseenter', onEnter);
    wrapper.addEventListener('mouseleave', onLeave);
    wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
    wrapper.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      gsap.ticker.remove(tick);
      gsap.killTweensOf(state.speed);
      wrapper.removeEventListener('mouseenter', onEnter);
      wrapper.removeEventListener('mouseleave', onLeave);
      wrapper.removeEventListener('touchstart', onTouchStart);
      wrapper.removeEventListener('touchend', onTouchEnd);
    };
  }, [speed]);

  const nudge = (direction: number) => {
    const state = stateRef.current;
    const target = state.x + direction * 200;

    gsap.killTweensOf(state);
    gsap.killTweensOf(state.speed);

    gsap.to(state.speed, { value: 0, duration: 0.2, ease: 'power2.out' });
    gsap.to(state, {
      x: target,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        if (state.x > 0) state.x -= state.totalWidth;
        if (Math.abs(state.x) >= state.totalWidth) state.x += state.totalWidth;
        gsap.to(state.speed, { value: 1, duration: 0.5, ease: 'power2.in' });
      },
    });
  };

  return (
    <div ref={wrapperRef} className="relative overflow-hidden w-full">
      <div ref={trackRef} className="flex w-max">
        <div className="flex">{children}</div>
        <div className="flex" aria-hidden="true">
          {children}
        </div>
      </div>
      {arrows && (
        <>
          <button
            onClick={() => nudge(1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() => nudge(-1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            →
          </button>
        </>
      )}
    </div>
  );
};
