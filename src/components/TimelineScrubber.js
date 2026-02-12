import { useState, useEffect, useRef, useCallback } from 'react';

const YEAR_START = 1440;
const YEAR_END = 2026;
const CENTURY_LABELS = [1500, 1600, 1700, 1800, 1900, 2000];

const yearToPercent = (year) => ((year - YEAR_START) / (YEAR_END - YEAR_START)) * 100;

const TimelineScrubber = ({ timeline, containerRef }) => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const getScrollEl = useCallback(() => containerRef?.current || window, [containerRef]);

  const updatePosition = useCallback(() => {
    const el = containerRef?.current;
    let scrollTop, maxScroll;
    if (el) {
      scrollTop = el.scrollTop;
      maxScroll = el.scrollHeight - el.clientHeight;
    } else {
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    }
    if (maxScroll <= 0) return;
    setPosition((scrollTop / maxScroll) * 100);
  }, [containerRef]);

  useEffect(() => {
    const scrollEl = getScrollEl();
    scrollEl.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    return () => scrollEl.removeEventListener('scroll', updatePosition);
  }, [getScrollEl, updatePosition]);

  const scrollToClickPosition = useCallback((clientY) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clickPercent = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    const targetYear = YEAR_START + (clickPercent / 100) * (YEAR_END - YEAR_START);
    const scrollTarget = (targetYear - 1425) * 10;

    const el = containerRef?.current;
    if (el) {
      el.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  }, [containerRef]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    scrollToClickPosition(e.clientY);

    const handleMouseMove = (moveEvent) => {
      if (!isDragging.current) return;
      moveEvent.preventDefault();
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((moveEvent.clientY - rect.top) / rect.height) * 100));
      const targetYear = YEAR_START + (pct / 100) * (YEAR_END - YEAR_START);
      const scrollTarget = (targetYear - 1425) * 10;

      const el = containerRef?.current;
      if (el) {
        el.scrollTop = scrollTarget;
      } else {
        window.scrollTo({ top: scrollTarget });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const currentYear = Math.round(YEAR_START + (position / 100) * (YEAR_END - YEAR_START));

  return (
    <div
      className="timeline-scrubber"
      role="slider"
      aria-valuemin={YEAR_START}
      aria-valuemax={YEAR_END}
      aria-valuenow={currentYear}
      aria-label="Timeline navigation"
    >
      <div
        className="scrubber-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
      >
        {CENTURY_LABELS.map((year) => (
          <span
            key={year}
            className="scrubber-label"
            style={{ top: `${yearToPercent(year)}%` }}
          >
            {year}
          </span>
        ))}
        {timeline.map((item) => (
          <div
            key={`${item.title}-${item.year}`}
            className="scrubber-dot"
            style={{
              top: `${yearToPercent(item.year)}%`,
              backgroundColor:
                item.category === 'invention' ? 'turquoise' :
                item.category === 'typography' ? 'hotpink' : 'orange',
            }}
            title={`${item.title} (${item.year})`}
          />
        ))}
        <div
          className="scrubber-position"
          style={{ top: `${position}%` }}
        />
      </div>
    </div>
  );
};

export default TimelineScrubber;
