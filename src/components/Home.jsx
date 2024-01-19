import React from "react";
import { useEffect, useState } from "react";
import MyNav from "./MyNav";
import CardAlbum from "./CardAlbum";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {

  const[songInfo , setSongInfo] = useState([])
  const[songInfo2 , setSongInfo2] = useState([])
  const[songInfo3 , setSongInfo3] = useState([])

   const handleArtist = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen' ,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        let result = await response.json()
        let songInfoCut = result.data.slice(0, 4)
        setSongInfo(songInfoCut)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }
   const handleArtist2 = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=adele' ,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        let result = await response.json()
        let songInfoCut = result.data.slice(0, 4)
        setSongInfo2(songInfoCut)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }
   const handleArtist3 = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem' ,
        {
          method: 'GET',
        }
      )
      if (response.ok) {
        let result = await response.json()
        let songInfoCut = result.data.slice(0, 4)
        setSongInfo3(songInfoCut)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleArtist()
    handleArtist2()
    handleArtist3()
  }, []) 


  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      {songInfo && (
        <Container>
          <MyNav />
          <Row>
            <Col className="col-10">
              <div id="searchResults" style={{ display: "none" }}>
                <h2>Search Results</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >
                  {songInfo.map((artist1, i) => (
                    <CardAlbum key={i} data={artist1} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                 {songInfo2.map((artist, i) => (
                    <CardAlbum key={i} data={artist} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row
                  className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  {songInfo3.map((artist, i) => (
                    <CardAlbum key={i} data={artist} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;
