import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null
    }

    this.sortedData = this.sortedData.bind(this)
  }

  getData() {
    axios.get('api/data')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }

  sortedData() {
    const data = this.state.data.data
    return data.sort((a, b) => {
      if (a.year === b.year) return 0
      return a.year < b.year ? -1 : 1
    })
  }

  yAxis() {
    const data = this.state.data.data
    const y = 10
    // PUSH ALL ELEMENTS UP FOR AESTHETICS
    const year = data.year
    // PLACE ITEMS ON ITEMLINE USING YEAR VALUE AND VALUE SET FOR 'Y'
    return year * y
  }

  componentDidMount() {
    this.getData()
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
    console.log('state data', this.state.data)
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <div className='container'>
        <h1 className='title'>Hello Universe!</h1>
        <div id='timeline'>
          {this.sortedData().map((item, i) =>
            <div key={i} className={item.category}
              style={{ transform: `translate(${this.xAxis}px, ${this.yAxis()}px)` }}>
              <h5>{item.title}</h5>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
