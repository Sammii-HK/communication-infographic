import { useState, useRef, useLayoutEffect } from 'react'
import getTimelineData from '../utils/getTimelineData';
import Modal from './Modal';

const Timeline = () => {
  const [timeline, setTimeline] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const timelineRef = useRef(null);
  
  useLayoutEffect(() => {
    setTimeline(getTimelineData(timelineRef.current.offsetWidth));
  }, []);
  
  return (
    <div className='container'>
      <h1 className='title'>Communication Infographic</h1>
      <div
        id='timeline'
        ref={timelineRef}>
        {timeline.map((item, i) =>
          <div key={i}
            className={ `item ${item.category}`}
            style={{ transform: `translate(${item.xAxis}px, ${item.yAxis}px)` }}
            onClick={() => setSelectedItem(item)} 
            >
            <h5>{item.title}</h5>
          </div>
        )}
      </div>
      <Modal selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </div>

  )
}

export default Timeline