import React, { Component, Fragment } from 'react'

const CELL_SIZE = 20
const WIDTH = 800
const HEIGHT = 600

class Game extends Component {
  constructor(props) {
    super(props)
    this.rows = HEIGHT / CELL_SIZE
    this.cols = HEIGHT / CELL_SIZE
    this.board = this.makeEmptyBoard()
  }

  state = {
    cells: [],
  }

  
  render() {
    return (
      <Fragment>
        <div 
          className="board"
          style={{ 
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
        />
      </Fragment>
    )
  }
}

export default Game