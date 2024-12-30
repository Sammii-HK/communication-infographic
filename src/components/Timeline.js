import { useState, useRef, useEffect } from 'react'
import getTimelineData from '../utils/getTimelineData';

const Timeline = () => {
  const [timeline, setTimeline] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const timelineRef = useRef(null);
  // const timelineData = getTimelineData(timelineRef);
  
  useEffect(() => {
    setTimeline(getTimelineData(timelineRef));
  }, [timelineRef]);
  
  
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
            // onClick={() => setSelectedItem(i)} 
            >
            <h5>{item.title}</h5>

          </div>
        )}

        {selectedItem &&
          <div className={`modal ${selectedItem ? 'is-active' : ''}`}>
            <div className='modal-background'></div>
            <div className='modal-card'>
              <header className='modal-card-head'>
                <h3 className='modal-card-title'>{selectedItem.title}</h3>
                <p className='column'>{selectedItem.year}</p>
                <button
                  className='delete'
                  onClick={this.handleClose}
                  aria-label='close'></button>
              </header>
              <section className='modal-card-body'>
                <p>{selectedItem.content}</p>
              </section>
              <footer className='modal-card-foot'>
                <p className={`column ${selectedItem.category}`}>{this.state.selectedItem.category}</p>
              </footer>
            </div>
          </div>
        }

      </div>
    </div>

  )
}

export default Timeline