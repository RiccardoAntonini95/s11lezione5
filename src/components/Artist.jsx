import { Row, Col, Button } from "react-bootstrap"
import MyNav from "./MyNav"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import CardTrack from "./CardTrack"

const Artist = () => {
  const params = useParams()
  const [currentArtist, setCurrentArtist] = useState(null)

  const handleArtist = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params.name}`,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        let result = await response.json()
        result = result.data
        console.log(result, "sto dentro alla fetch artist")
        setCurrentArtist(result)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
    }

useEffect(() => {
  handleArtist()
}, [])

    return (
      <>
        {currentArtist && (
          <Col className="col-12 col-md-9 offset-md-3 mainPage">
            <MyNav />
            <Row>
              <Col className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain">{currentArtist[0].artist.name}</h2>
                <div id="followers">
                  {currentArtist[0].artist.nb_fan} followers{" "}
                </div>
                <div
                  className="d-flex justify-content-center"
                  id="button-container"
                >
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
                  <Row id="apiLoaded"> {/* mappare */}
                  {currentArtist.map((artist, i) => (
                    <CardTrack key={i} data={artist} />
                  ))}
{/*                     <div className="col-sm-auto col-md-auto text-center mb-5">
                      <Link to={`/album/${currentArtist[0].album.id}`}>
                        <img
                          className="img-fluid"
                          src={currentArtist[0].album.cover_medium}
                        />
                      </Link>
                      <p className="m-0">
                        <a href="#">Track: {currentArtist[0].title}</a>
                      </p>
                      <p>
                        <Link to={`/album/${currentArtist[0].album.id}`}>
                          Album: {currentArtist[0].album.title}
                        </Link>
                      </p>
                    </div> */}
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        )}
      </>
    );
}

export default Artist