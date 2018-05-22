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

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect()
    const doc = document.documentElement

    return {
      x: (rect.left + window.pageXOffset) - doc.clientLeft,
      y: (rect.top + window.pageYOffset) - doc.clientTop,
    }
  }

  handleClick = e => {
    const elemOffset = this.getElementOffset()
    const offsetX = e.clientX - elemOffset.x
    const offsetY = e.clientY - elemOffset.y

    const x = Math.floor(offsetX / CELL_SIZE)
    const y = Math.floor(offsetY / CELL_SIZE)

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x]
    }

    this.setState({ cells: this.makeCells() })
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
          onClick={this.handleClick}
          ref={n => { this.boardRed = n }}
        />
      </Fragment>
    )
  }
}

export default Game