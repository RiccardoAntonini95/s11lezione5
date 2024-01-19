import { TRACK_PLAY } from "../actions";

const initialState = {
    currentTrack: null
}

const trackReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRACK_PLAY:
            return {
                ...state,
                currentTrack: (action.payload),
              }
              default:
                return state
    }
} 

export default trackReducer