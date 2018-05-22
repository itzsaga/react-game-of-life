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

  makeEmptyBoard() {
    let board = []
    for (let y = 0; y < this.rows; y++) {
      board[y] = []
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false
      }
    }
    return board
  }

  makeCells() {
    let cells = []
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y })
        }
      }
    }
    return cells
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