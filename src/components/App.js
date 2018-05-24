import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Game from './Game'

import '../styles/app.sass'

class App extends Component {
  render() {
    return (
      <Game />
    )
  }
}

export default hot(module)(App)