import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/markets',
});

export const coingeckoAPI = {
    getRequestCoins(currentPage = 1, pageSize = 10) {
        return instance.get(`?vs_currency=usd&order=market_cap_desc&per_page=${pageSize}&page=${currentPage}&sparkline=false`)
            .then(res => res)
    }
}