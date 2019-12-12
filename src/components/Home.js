import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      timeline: null
    }

    // this.sortedData = this.sortedData.bind(this)
  }

  getData() {
    axios.get('api/data')
      .then(res => this.setState({ timeline: res.data }))
      .catch(err => console.error(err))
  }

  sortedData() {
    const data = this.state.timeline.data
    return data.sort((a, b) => {
      if (a.year === b.year) return 0
      return a.year < b.year ? -1 : 1
    })
  }

  yAxis() {
    const data = this.state.timeline.data
    if (!data) return
    const y = 10
    console.log('yAxis timeline.data', this.state.timeline)
    // // PUSH ALL ELEMENTS UP FOR AESTHETICS
    // // PLACE ITEMS ON ITEMLINE USING YEAR VALUE AND VALUE SET FOR 'Y'
    data.map(item => {
      console.log('item', item.year)
      // this.setState({ yAxis: (item.year * y) })
    })
    // return this.sortedData().map(item =>
    //   // yAxis = item.year * y
    //   console.log('item', item)
    // )
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    // console.log('timeline.data', this.state.timeline)
    this.yAxis()
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
    if (!this.state.timeline) return <h1>Loading...</h1>
    return (
      <div className='container'>
        <h1 className='title'>Hello Universe!</h1>
        <div id='timeline'>
          {this.state.timeline.data.map((item, i) =>
            <div key={i}
              className={item.category}
              style={{ transform: `translate(50px, ${item.yAxis}px)` }}>
              <h5>{item.title}</h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
