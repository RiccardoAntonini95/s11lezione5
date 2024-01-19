import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNav from "./MyNav";
import { useEffect, useState } from "react";
import CardAlbum from "./CardAlbum";

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

const Home = () => {
  
  let header = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0'
  }
  let header2 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387'
  }
  let header3 = {
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20'
  }


  const[songInfo , setSongInfo] = useState([])
  const[songInfo2 , setSongInfo2] = useState([])
  const[songInfo3 , setSongInfo3] = useState([])

   const handleArtist = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen' ,
        {
          method: 'GET',
          /* header3, */
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
          /* header3, */
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
          /* header3, */
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
