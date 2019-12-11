import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null
    }
  }

  getData() {
    axios.get('api/data')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getData()
    console.log('data', this.state.data)
  }

  render() {
    if (!this.state.data) return <h1>Loading...</h1>
    return (
      <div className='container'>
        <h1 className='title'>Hello Universe!</h1>
      </div>
    )
  }
}

export default Home
