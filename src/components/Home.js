import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      timeline: [],
      usedYearSlotColumns: {},
      selectedItem: null
    }

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



  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    console.log('update', this.state.selectedItem);
  }

  render() {
    console.log("state:", this.state)
    return (
      <div className='container'>
        <h1 className='title'>Communication Infographic</h1>

      </div>
    )
  }
}

export default Home
