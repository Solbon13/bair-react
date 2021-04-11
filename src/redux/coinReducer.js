import { coingeckoAPI } from "../api/api"

const SET_COIN = "SET_COIN"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    coins: [{
        id: '',
        name: '',
            current_price: '',
            symbol: '',
            total_volume: '',
            market_cap: '',
            image: '',
            price_change_percentage_24h: 0
    }],
    totalCount: 250,
    pageSize: 10,
    currentPage: 1
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COIN:
            return {
                ...state,
                coins: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}


export const setCoins = coins => ({type: SET_COIN, payload: coins})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, payload: currentPage})

export const getCoins = (currentPage, pageSize) => {
    return async (dispatch) => {
        let data = await coingeckoAPI.getRequestCoins(currentPage, pageSize)        
        dispatch(setCurrentPage(currentPage))
        dispatch(setCoins(data.data))
    }
}