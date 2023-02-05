import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    isLoadingStarted: true,
  }

  componentDidMount() {
    this.cryptoCurrenciesList()
  }

  cryptoCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptoData = await response.json()
    const updateCryptoDataFormat = cryptoData.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      id: eachItem.id,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoData: updateCryptoDataFormat, isLoadingStarted: false})
  }

  render() {
    const {cryptoData, isLoadingStarted} = this.state
    return (
      <div className="crypto-currencies-list">
        <div className="crypto-list-container">
          <div className="coin-image-type">
            <p className="coin-type">Coin Type</p>
          </div>
          <div className="usdAndEuroCurrencies">
            <p className="usd">USD</p>
            <p className="Euro">EURO</p>
          </div>
        </div>
        <ul>
          {isLoadingStarted ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
              <h1 className="cryp">Cryptocurrency Tracker</h1>
            </div>
          ) : (
            cryptoData.map(eachItem => (
              <CryptocurrencyItem cryptoData={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
