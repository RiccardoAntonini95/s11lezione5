import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import trackReducer from '../reducers/track'

const bigReducer = combineReducers({
    favourite: favouriteReducer,
    track: trackReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store