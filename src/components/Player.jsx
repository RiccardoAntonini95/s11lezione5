import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GrChapterPrevious, GrChapterNext, GrPlayFill, GrPowerCycle } from "react-icons/gr";
import { LuShuffle } from "react-icons/lu";
import { useSelector } from "react-redux";

const Player = () => {
  const trackInPlay = useSelector((state) => state.track.currentTrack)


  return (
    <Container className="container-fluid fixed-bottom bg-container pt-1">
      {trackInPlay && (
        <div className="d-flex justify-content-end align-items-center">
          <p className="text-white">PLAY: {trackInPlay.title}</p>
          <img src={trackInPlay.album.cover} width="48px"></img>
        </div>
      )}
      <Container>
        <Row>
          <Col
            lg={10}
            className="offset-lg-2 w-100 d-flex justify-content-center flex-column align-items-center"
          >
            <Row className="w-50">
              <Col className="playerControls mt-1 w-100">
                <Row className="mx-5">
                  <Col className="text-center">
                    <LuShuffle className="text-secondary" />
                  </Col>
                  <Col className="text-center">
                    <GrChapterPrevious className="text-secondary" />
                  </Col>

                  <Col className="text-center">
                    <GrPlayFill className="text-secondary" />
                  </Col>
                  <Col className="text-center">
                    <GrChapterNext className="text-secondary" />
                  </Col>

                  <Col className="text-center">
                    <GrPowerCycle className="text-secondary" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3 w-100 mx-5">
              <Col className="col-8 col-md-6">
                <div className="progress">
                  <div className="progress-bar" role="progressbar"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Player;