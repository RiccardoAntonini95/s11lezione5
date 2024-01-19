import CardTrack from "./CardTrack"
import { useSelector } from "react-redux"
import { Row } from "react-bootstrap"

const Favourites = () => {
    const favTracks = useSelector((state) => state.favourite.favourite.list)
    console.log(favTracks)

    return(
        <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
            {favTracks.map((trackData, i) => (
              <CardTrack key={i} data={trackData} id={trackData.id} />
            ))}
        </Row>
        </div>
    )
}
export default Favourites