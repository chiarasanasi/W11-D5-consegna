import "../App.css"
import { Row, Col } from "react-bootstrap"

const Footer = function () {
  return (
    <>
      <div className="bg-main text-light p-4 border-0">
        <h4>Altro da esplorare</h4>
        <Row>
          <Col xs={12} className="d-flex flex-wrap gap-1">
            <p className="bg-navbar p-3 rounded-2 text-danger pe-5 me-3 ">
              Esplora per genere
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Worldwide
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Video Musicali
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Decenni
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Classifiche
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Nuovi Artisti
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Attività e stati d'animo
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Audio Spaziale
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Hit del passato
            </p>
            <p className="bg-navbar p-3 rounded-2 text-danger  pe-5 me-3">
              Esplora per genere
            </p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
