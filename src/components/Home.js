import React from 'react'
import axios from 'axios'

class Home extends React.Component {

  constructor() {
    super()

    this.state = {
      data: null
    }
    activeItem: null
  }

  getData() {
    axios.get('./data.json')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }
  componentDidMount() {
    this.getData()
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
