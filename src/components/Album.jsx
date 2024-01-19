import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MyNav from "./MyNav"
import Tracklist from "./Tracklist"
import { Row, Col } from "react-bootstrap"
import { header4 } from "../redux/actions"


const Album = () => {
  const params = useParams()
  const[currentAlbum, setCurrentAlbum] = useState(null)
  console.log(currentAlbum)

    const handleAlbum = async () => {
      try {
        let response = await fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/album/${params.elementId}`,
          {
            method: 'GET',
            headers: header4
          }
        )
        if (response.ok) {
          let result = await response.json()
          console.log(result, "sto dentro alla fetch album")
          setCurrentAlbum(result)
        } else {
          console.log('error')
        }
      } catch (err) {
        console.log(err)
      }
      }

  useEffect(() => {
    handleAlbum()
  }, [])


  return (
    <>
    {currentAlbum && (
          <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <MyNav />
      <Row>
        <Col className="col-md-3 pt-5 text-center" id="img-container">

            <img src={currentAlbum.cover} className="card-img img-fluid" alt="Album" />
            <div className="mt-4 text-center">
                <p className="album-title">{currentAlbum.title}</p>
            </div>
            <div className="text-center">
                {<p className="artist-name">{currentAlbum.artist.name}</p>}
            </div>
            <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">Play</button>
            </div>

        </Col>
        <Col className="col-md-8 p-5">
          <Row>
            <Col className="col-md-10 mb-5" id="trackList">

             {currentAlbum.tracks.data.map((track, i) => (
                    <Tracklist key={i} track={track} />
                  ))}

            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    )}
    </>
  );
}

export default Album