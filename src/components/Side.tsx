import { Form, InputGroup, Navbar, Nav } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"

import { FaTowerBroadcast } from "react-icons/fa6"

import { FiHome } from "react-icons/fi"

import { LuGrid2X2 } from "react-icons/lu"

const Side = function () {
  return (
    <>
      <Navbar expand="sm" className="p-0 bg-side d-flex px-4 px-sm-0 ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="bg-side px-4 pt-4 d-flex flex-column"
            style={{ height: "100vh" }}
          >
            <Nav.Item>
              <img
                src="./assets/logos/music.svg"
                alt="music-logo"
                className="text-grey mb-3"
                width={100}
              />
            </Nav.Item>
            <Nav.Item>
              <Form>
                <InputGroup className="mt-3">
                  <InputGroup.Text className=" bg-dark  border-grey ">
                    <Search className="text-danger" />
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="m-0 p-0 bg-dark border-0 custom-placeholder "
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form>
            </Nav.Item>
            <Nav.Item>
              <ul className="text-grey list-unstyled ms-2">
                <li className="my-3">
                  <a href="/" className="text-decoration-none text-grey">
                    <FiHome className="text-danger me-3 fs-5 " />
                    Home
                  </a>
                </li>
                <li className="my-3">
                  <a href="/" className="text-decoration-none text-grey">
                    <LuGrid2X2 className="text-danger  me-3 fs-5" />
                    Novità
                  </a>
                </li>
                <li className="my-3">
                  <a href="/" className="text-decoration-none text-grey">
                    <FaTowerBroadcast className="text-danger me-3 fs-5" />
                    Radio
                  </a>
                </li>
              </ul>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <img
          src="./assets/logos/music.svg"
          alt="music-logo"
          width={80}
          className="d-block d-sm-none"
        />
        <a
          href="/"
          className="text-danger text-decoration-none fw-semibold d-block d-sm-none"
        >
          Accedi
        </a>
      </Navbar>
    </>
  )
}

export default Side
