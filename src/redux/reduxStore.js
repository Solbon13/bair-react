import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import coinReducer from "./coinReducer"

const rootReducer = combineReducers({
    coin: coinReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))