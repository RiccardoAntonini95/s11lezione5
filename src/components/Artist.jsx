import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CardTrack from "./CardTrack"
import MyNav from "./MyNav"
import { Row, Col, Button } from "react-bootstrap"

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
                  {currentArtist[0].rank} followers{" "}
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
                  <Row id="apiLoaded">
                  {currentArtist.map((artist, i) => (
                    <CardTrack key={i} data={artist} />
                  ))}
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