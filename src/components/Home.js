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

  componentDidMount() {
    this.getData()
    // console.log('data', this.state.data)
  }

  render() {
    console.log('state data', this.state.data)
    // console.log('state data', this.state.data._id)
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <div className='container'>
        <h1 className='title'>Hello Universe!</h1>
        <div id='timeline'>
          {this.sortedData().map((item, i) =>
            <div key={i} className={item.category}>
              <h5>{item.title}</h5>
              <p>{item.year}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
