import { Row, Col, Button } from "react-bootstrap"
import MyNav from "./MyNav"

const prova = {
    "id": 6461440,
    "readable": true,
    "title": "Love The Way You Lie",
    "title_short": "Love The Way You Lie",
    "title_version": "",
    "link": "https://www.deezer.com/track/6461440",
    "duration": 263,
    "rank": 945116,
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 1,
    "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3",
    "md5_image": "be682506145061814eddee648edb7c59",
    "artist": {
    "id": 13,
    "name": "Eminem",
    "link": "https://www.deezer.com/artist/13",
    "picture": "https://api.deezer.com/artist/13/image",
    "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
    "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
    "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
    "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
    "tracklist": "https://striveschool-api.herokuapp.com/api/deezer/artist/13/top?limit=50",
    "type": "artist"
    },
    "album": {
    "id": 595243,
    "title": "Recovery",
    "cover": "https://api.deezer.com/album/595243/image",
    "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg",
    "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg",
    "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg",
    "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg",
    "md5_image": "be682506145061814eddee648edb7c59",
    "tracklist": "https://api.deezer.com/album/595243/tracks",
    "type": "album"
    },
    "type": "track"
    }


const Artist = () => {
    return(
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
          <MyNav />
          <Row>
            <Col className="col-12 col-md-10 col-lg-10 mt-5">
              <h2 className="titleMain">{prova.artist.name}</h2>
              <div id="followers">{prova.artist.nb_fan} followers </div>
              <div className="d-flex justify-content-center" id="button-container">
                <Button
                  className="btn btn-success mr-2 mainButton d-inline"
                  id="playButton"
                >
                  PLAY
                </Button>
                <Button
                  className="btn btn-outline-light mainButton d-inline"
                  id="followButton"
                >
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <Row id="apiLoaded"> 
                {/* questa commentata è html che si popola con la fetch */}
                <div className="col-sm-auto col-md-auto text-center mb-5">
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img className="img-fluid" src={
                prova.album.cover_medium // creating the album image anchor
              }/>
            </a>
            <p className="m-0">
              <a href="#">
                Track: {prova.title}
              </a>
            </p>
            <p>
              <a href="/album_page.html?id=${prova.album.id}">
                Album: {prova.album.title}
              </a>
            </p>
          </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
    )
}

export default Artist