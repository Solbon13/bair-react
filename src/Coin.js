import React from 'react';
import styles from './Coin.module.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className={styles.coin_symbol}>{symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>${price}</p>
          <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={styles.coiyn_percent, styles.red}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={styles.coin_percent, styles.green}>{priceChange.toFixed(2)}%</p>
          )}

          <p className={styles.coin_marketcap}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;