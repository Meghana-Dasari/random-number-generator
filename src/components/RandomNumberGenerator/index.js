// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    this.setState({count: this.getRandomNumber()})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button type="button" className="buttong" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
