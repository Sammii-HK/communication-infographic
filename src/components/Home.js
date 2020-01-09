import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      timeline: []
    }

    this.yAxis = this.yAxis.bind(this)
    this.xAxis = this.xAxis.bind(this)
    this.getData = this.getData.bind(this)
    this.overlapCheck = this.overlapCheck.bind(this)
  }

  getData() {
    axios.get('api/data')
      .then(res => {
        this.yAxis(res.data)
      })
      .then(() => console.log(this.state.timeline))
      .catch(err => console.error(err))
  }

  sortedData() {
    const data = this.state.timeline.data
    return data.sort((a, b) => {
      return a.year - b.year
    })
  }

  yAxis(data) {
    const y = 10
    const timeline = data.data.map(item => {
      const yAxis = (item.year - 1425) * y
      return { ...item, yAxis }
    })
    this.setState({ timeline })
    this.xAxis()
  }

  xAxis() {
    const timeline = this.state.timeline.map((item, i) => {
      const xAxis = this.randomNumber()
      return { ...item, xAxis }
    })
    this.setState({ timeline })
    this.overlapCheck()
  }

  overlapCheck() {
    const timelineDOM = document.getElementById('timeline')
    const width = timelineDOM.offsetWidth
    const paddingValue = width / 10
    const timeline = this.state.timeline.map((currentItem, i) => {
      const xAxis = currentItem.xAxis
      const withinTenYears = []

      console.log('current:', currentItem.title, currentItem.year)

      for (let comparableIndex = 0; comparableIndex <= i; comparableIndex ++) {

        if ((this.state.timeline[comparableIndex].year + 10) >= currentItem.year) {
          console.log(this.state.timeline[comparableIndex].year, this.state.timeline[comparableIndex].title)
          withinTenYears.push(this.state.timeline[comparableIndex].xAxis)
        }
      }

      console.log('withinTenYears', withinTenYears)

      // MAP WITHIN TEN YEARS ARRAY
      while (withinTenYears.some(value => {
        return currentItem.xAxis >= (value - paddingValue) && currentItem.xAxis <= (value + paddingValue)
      })
      ) {
        // MAKE A NEW NUMBER
        const newNumber = this.randomNumber()
        // SET XAXIS VALUE FOR USE LATER
        xAxis = newNumber
      }

      return { ...currentItem, xAxis }
    })
    this.setState({ timeline })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
  }

  // MAKE POSITIVE OR NEGATIVE NUMBER
  posOrNeg() {
    return Math.random() < 0.5 ? -1 : 1
  }

  randomNumber() {
    const width = document.getElementById('timeline').offsetWidth
    // MAKE A RANDOM VALUE WHICH IS HALF OF TIMELINE WIDTH
    let randomValue = Math.round(Math.random() * (width / 2) - 1)
    // RANDOMLY MAKE THE VALUE POSITIVE OR NEGATIVE
    randomValue = randomValue * this.posOrNeg()
    return randomValue
  }

  render() {
    if (this.state.timeline.length === 0) return <h1>Loading...</h1>
    //this.yAxis()
    return (
      <div className='container'>
        <h1 className='title'>Hello Universe!</h1>
        <div id='timeline'>
          {this.state.timeline.map((item, i) =>
            <div key={i}
              className={ `item ${item.category}`}
              style={{ transform: `translate(${item.xAxis}px, ${item.yAxis}px)` }}>
              <h5>{item.title}</h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
