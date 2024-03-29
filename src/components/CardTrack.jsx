import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { TRACK_PLAY } from "../redux/actions"

const CardTrack = ({data}) => {
  const dispatch = useDispatch()

  const handlePlayTrack = () => {
    dispatch({
      type: TRACK_PLAY,
      payload : data
    })
  }

    return(
        <div className="col-sm-auto col-md-auto text-center mb-5">
        <Link to={`/album/${data.album.id}`}>
          <img
            className="img-fluid"
            src={data.album.cover_medium}
          />
        </Link>
        <p className="m-0">
          <a href="#" onClick={handlePlayTrack}>Track: {data.title}</a>
        </p>
        <p>
          <Link to={`/album/${data.album.id}`}>
            Album: {data.album.title}
          </Link>
        </p>
      </div>
    )
}

export default CardTrack