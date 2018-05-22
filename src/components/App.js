import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Game from './Game'

class App extends Component {
  render() {
    return (
      <Game />
    )
  }
}

export default hot(module)(App)