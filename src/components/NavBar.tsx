import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../App.css"

import {
  PlayFill,
  RewindFill,
  Shuffle,
  SkipForwardFill,
  VolumeDown,
  VolumeUp,
} from "react-bootstrap-icons"

import { NavItem } from "react-bootstrap"
import { Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { BiUser } from "react-icons/bi"

const NavBar = function () {
  return (
    <>
      <Navbar expand="lg" className="bg-navbar pe-4 py-3">
        <Container>
          <Nav className="me-auto">
            <div className=" align-items-center flex-nowrap d-none d-lg-flex">
              <Shuffle className="text-grey mx-2" />
              <RewindFill className="text-grey mx-2" />
              <PlayFill className="text-grey mx-2 fs-2" />
              <SkipForwardFill className="text-grey mx-2" />
            </div>
          </Nav>

          <Navbar.Brand
            href="/"
            className="bg-logo w-50 rounded-1 d-flex justify-content-center"
          >
            <img src="./assets/logos/apple.svg" alt="logo-apple" width={20} />
          </Navbar.Brand>

          <NavItem className="d-flex align-items-center d-none d-lg-flex">
            <VolumeDown className="text-grey mx-2 fs-4" />
            <Form.Range />
            <VolumeUp className="text-grey mx-2 fs-4" />
          </NavItem>
          <NavItem>
            <button className="bg-red text-light d-flex align-items-center rounded-1 px-2 py-1 pe-3">
              <BiUser className="text-light mx-2 fs-5" />
              Accedi
            </button>
          </NavItem>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
