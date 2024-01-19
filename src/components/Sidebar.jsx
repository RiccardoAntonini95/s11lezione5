import React from "react";
import { useState } from "react";
import Spotify_Logo from "../assets/img/Spotify_Logo.png"
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleNavigate = () => {
    navigate(`/artist/${query}`)
  } 

   return (
    <div className="col-2">
      <Navbar
        expand="md"
        className="navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container mt-4">
          <Link to={"/"}>
            <Navbar.Brand className="ms-2">
            <img
              src={Spotify_Logo}
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup" className="mt-5 me-2">
            <Nav className="navbar-nav">
              <ul className="text-secondary">
                <li className="m-2">
                  <FaHome className="fs-3 mx-2" />
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="m-2">
                  <FaBookOpen className="fs-3 mx-2" />
                  <Link to={"/favourites"}>Favourites</Link>
                </li>
                <li>
                  <InputGroup className="mt-3 p-2">
                    <FormControl
                      type="text"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                    />

                    <Button
                      variant="outline-secondary"
                      size="sm"
                      type="button"
                      id="button-addon1"
                       onClick={() => handleNavigate()}
                    >
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div>
          <Button className="signup-btn mx-3" type="button">
            Sign Up
          </Button>
          <Button className="login-btn mx-3" type="button">
            Login
          </Button>
          <div>
            <a className="text-white text-decoration-none m-3" href="#">
              Cookie Policy
            </a>
            |
            <a className="text-white text-decoration-none m-3" href="#">
              
              Privacy
            </a>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Sidebar

