import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onCong()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onCong, 1000)
  }

  render() {
    const { value, onCong, onTru, onNhan, onChia } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onCong}>
          +
        </button>
        {' '}
        <button onClick={onTru}>
          -
        </button>
        <button onClick={onNhan}>
          x
        </button>
        <button onClick={onChia}>
          /
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onCong: PropTypes.func,
  onTru: PropTypes.func,
  onNhan: PropTypes.func,
  onChia: PropTypes.func
}
export default Counter
