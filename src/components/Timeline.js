import { useState, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import getTimelineData from '../utils/getTimelineData';
import Modal from './Modal';
import YearIndicator from './YearIndicator';
import FilterBar from './FilterBar';
import TimelineScrubber from './TimelineScrubber';

const ALL_CATEGORIES = ['invention', 'typography', 'movement'];

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategories, setActiveCategories] = useState(ALL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');

  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    setTimeline(getTimelineData(timelineRef.current.offsetWidth));
  }, []);

  const handleItemClick = (item, e) => {
    triggerRef.current = e.currentTarget;
    setSelectedItem(item);
  };

  const handleItemKeyDown = (item, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerRef.current = e.currentTarget;
      setSelectedItem(item);
    }
  };

  const isItemVisible = (item) => {
    if (!activeCategories.includes(item.category)) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  };

  return (
    <div className='container' ref={containerRef}>
      <FilterBar
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <YearIndicator containerRef={containerRef} />
      <h1 className='title'>Communication Infographic</h1>
      <div
        id='timeline'
        ref={timelineRef}>
        {timeline.map((item) => {
          const visible = isItemVisible(item);
          return (
            <motion.div
              key={`${item.title}-${item.year}`}
              className={classNames('item', item.category, { 'item-hidden': !visible })}
              style={{ top: `${item.yAxis}px`, left: `calc(50% + ${item.xAxis}px)` }}
              onClick={visible ? (e) => handleItemClick(item, e) : undefined}
              onKeyDown={visible ? (e) => handleItemKeyDown(item, e) : undefined}
              tabIndex={visible ? 0 : -1}
              role="button"
              aria-label={`${item.title}, ${item.year}`}
              aria-hidden={!visible}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="item-year">{item.year}</span>
              <h5>{item.title}</h5>
            </motion.div>
          );
        })}
      </div>
      <TimelineScrubber timeline={timeline} containerRef={containerRef} />
      <AnimatePresence>
        {selectedItem && (
          <Modal
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            triggerRef={triggerRef}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
