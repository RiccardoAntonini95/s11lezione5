import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'

const bigReducer = combineReducers({
    favourite: favouriteReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store