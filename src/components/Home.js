import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      timeline: []
    }

    // this.sortedData = this.sortedData.bind(this)
    this.yAxis = this.yAxis.bind(this)
    this.xAxis = this.xAxis.bind(this)
    this.getData = this.getData.bind(this)
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
    // const data = this.state.timeline.data
    // if (!data.data) return
    const y = 10
    // console.log('yAxis timeline.data', this.state.timeline)
    const timeline = data.data.map(item => {
      // console.log('item', item)
      const yAxis = (item.year - 1425) * y
      return { ...item, yAxis }
    })
    this.setState({ timeline })

    this.xAxis()
  }

  xAxis(data) {
    console.log('xAxis', this.randomNumber(), data)
    const timeline = this.state.timeline.map(item => {
      const xAxis = this.randomNumber()
      return { ...item, xAxis }
    })
    this.setState({ timeline })
    setTimeout(() => console.log(this.state.timeline), 1000)
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    //console.log('timeline.data', this.state.timeline)
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
              className={item.category}
              style={{ transform: `translate(0, ${item.yAxis}px)` }}>
              <h5>{item.title}</h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
