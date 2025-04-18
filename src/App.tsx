import "./App.css"
import NavBar from "./components/NavBar"
import Novità from "./components/Novità"
import NuoviEpisodi from "./components/NuoviEpisodi"
import Side from "./components/Side"
import { Col, Row } from "react-bootstrap"

function App() {
  return (
    <>
      <Row className="gx-0 vh-100 overflow-hidden">
        <Col
          xs={12}
          sm={3}
          className="position-relative"
          style={{ height: "auto" }}
        >
          <div className="d-block d-sm-none">
            <Side />
          </div>
          <div
            className="d-none d-sm-block position-fixed top-0 start-0 bg-side"
            style={{ height: "100vh", width: "25%" }}
          >
            <Side />
          </div>
        </Col>

        <Col xs={12} sm={9} className="offset-sm-3 d-flex flex-column h-100">
          <div className="d-none d-sm-block">
            <NavBar />
          </div>
          <div className="hide-scrollbar overflow-auto flex-grow-1">
            <Novità />
            <NuoviEpisodi artista="Pinguini Tattici Nucleari" />
            <NuoviEpisodi artista="Venerus" />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default App
