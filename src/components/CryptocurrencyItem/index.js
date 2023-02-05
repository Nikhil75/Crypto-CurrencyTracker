import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogo, currencyName, id, euroValue, usdValue} = cryptoData

  return (
    <li className="list">
      <div className="making-list-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usdAndEuroCurrencies">
        <p className="USD-currency">{usdValue}</p>
        <p className="EURO-currency">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
