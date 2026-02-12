import { useState, useEffect } from 'react';

const YEAR_START = 1440;
const YEAR_END = 2026;

const YearIndicator = ({ containerRef }) => {
  const [year, setYear] = useState(YEAR_START);

  useEffect(() => {
    const getScrollEl = () => containerRef?.current || window;
    const getScrollTop = () => {
      const el = containerRef?.current;
      return el ? el.scrollTop : (window.scrollY || document.documentElement.scrollTop);
    };

    const handleScroll = () => {
      const scrollTop = getScrollTop();
      const computed = Math.round((scrollTop / 10) + 1425);
      setYear(Math.max(YEAR_START, Math.min(YEAR_END, computed)));
    };

    const scrollEl = getScrollEl();
    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <div className="year-indicator" aria-live="polite">
      {year}
    </div>
  );
};

export default YearIndicator;
