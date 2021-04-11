import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Coin from './Coin';
import { getCoins } from './redux/coinReducer'
import { createPages } from './utils/pagesCreator'

function App(props) {
  const [search, setSearch] = useState('');
  const {coins, getCoins, currentPage, totalCount, pageSize} = props;
  console.log(props)

  useEffect(() => {
    getCoins(currentPage, pageSize)
  }, [getCoins]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const pagesCount = Math.ceil(totalCount / pageSize)
  const pages = []
    createPages(pages, pagesCount, currentPage)
    console.log(pages)

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? 'current-page' : 'page'}
                    onClick={() => getCoins(page, pageSize)}
                    >{page}</span>)}
            </div>

    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    coins: state.coin.coins,
    currentPage: state.coin.currentPage,
    totalCount: state.coin.totalCount,
    pageSize: state.coin.pageSize
  }
}

export default connect(mapStateToProps, {
  getCoins
})(App)