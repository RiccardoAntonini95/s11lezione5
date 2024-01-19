import { Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const CardAlbum = ({data}) => {
    return (
      <Col className="text-center">
        <Link to={`/album/${data.album.id}`}>
          <img src={data.album.cover_medium}></img>
        </Link>
        <p className="m-0">
        <Link to={`/album/${data.album.id}`}>
            Album: {data.album.title}
        </Link>
        </p>
        <p>
        <Link to={`/artist/${data.artist.name.toLowerCase()}`}>
            Artist: {data.artist.name}
        </Link>
        </p>
      </Col>
    );
}

export default CardAlbum