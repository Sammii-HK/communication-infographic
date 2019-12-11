import React from 'react'
import MarsRoverCarousel from './MarsRoverCarousel'

import {Link} from 'react-router-dom'

import Store from '../lib/Store'


class ItemShow extends React.Component{

  render(){
    this.stringifyDatum()
    return(
      <div className="mainContainer">
        <h2>Don't Panic</h2>
      </div>
    )
  }
}

export default ItemShow
