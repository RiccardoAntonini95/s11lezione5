import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, TRACK_PLAY } from "../redux/actions";

const Tracklist = ({track}) => {
    const[favourite, setFavourite] = useState(false)
    const dispatch = useDispatch() 
    console.log(track)

    const handleFavourite = () => {
        if(favourite){
            setFavourite(false)
            dispatch({
                type: REMOVE_FROM_FAVOURITE,
                payload : track
            })
        } else {
            setFavourite(true)
            dispatch({
                type: ADD_TO_FAVOURITE,
                payload : track
            })
        }
    }

    const handlePlayTrack = () => {
      dispatch({
        type: TRACK_PLAY,
        payload : track
      })
    }

  return (
    <div className="py-3 trackHover" onClick={handlePlayTrack}>
      <a href="#" className="card-title trackHover px-3 text-white">
        {track.title}
      </a>
      <div onClick={handleFavourite}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={favourite? "yellow" : "currentColor"} class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></div>
      <small className="duration text-white">
        {track.duration / 100} min
      </small>
    </div>
  );
};

export default Tracklist