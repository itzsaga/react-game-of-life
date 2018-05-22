import React, { Component, Fragment } from 'react'

const CELL_SIZE = 20
const WIDTH = 800
const HEIGHT = 600

class Game extends Component {
  render() {
    return (
      <Fragment>
        <div 
          className="board"
          style={{ width: WIDTH, height: HEIGHT }}
        />
      </Fragment>
    )
  }
}

export default Game