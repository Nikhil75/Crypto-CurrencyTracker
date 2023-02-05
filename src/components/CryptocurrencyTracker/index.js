import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="crypto-app-container">
        <div className="crypto-image">
          <h1 className="name">Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency"
          />
        </div>
        <div className="crypto-currencies-list">
          <CryptocurrenciesList />
        </div>
      </div>
    )
  }
}

export default CryptocurrencyTracker
