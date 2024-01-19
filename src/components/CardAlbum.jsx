import { Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const CardAlbum = () => {
    return (
      <Col className="text-center" /* id=${songInfo.id} */>
        <a href="/album_page.html?id=${songInfo.album.id}">
          <img src={songInfo.album.cover_medium}></img>
        </a>
        <p className="m-0">
          <a href="/album_page.html?id=${songInfo.album.id}">
            Album: {songInfo.album.title}
          </a>
        </p>
        <p>
          <a href="/artist_page.html?id=${songInfo.artist.id}">
            Artist: {songInfo.artist.name}
          </a>
        </p>
      </Col>
    );
}

export default CardAlbum