import { Row, Col } from "react-bootstrap"
const MyNav = () => {
    return(
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a className='text-decoration-none' href="#">TRENDING</a>
            <a className='text-decoration-none' href="#">PODCAST</a>
            <a className='text-decoration-none' href="#">MOODS AND GENRES</a>
            <a className='text-decoration-none' href="#">NEW RELEASES</a>
            <a className='text-decoration-none' href="#">DISCOVER</a>
          </Col>
        </Row>
    )
}

export default MyNav