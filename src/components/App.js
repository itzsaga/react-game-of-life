import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

import Game from './Game'

import '../styles/app.sass'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Conway's Game of Life</h1>
        <Game />
      </div>
    )
  }
}

export default hot(module)(App)