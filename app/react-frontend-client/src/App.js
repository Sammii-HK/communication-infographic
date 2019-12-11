import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import 'bulma'

import './style.scss'

import Home from './components/Home'
import ItemShow from './components/ItemShow'


class App extends React.Component {
  render(){
    return(
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/item/:id" component={ItemShow} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
