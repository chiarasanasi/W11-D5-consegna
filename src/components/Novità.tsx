import { Card } from "react-bootstrap"
import "../App.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Novità = function () {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-main text-light p-4 border-0">
      <h1>Novità</h1>
      <Slider {...settings}>
        <div>
          <Card className="bg-transparent my-3 mx-2">
            <Card.Body className="border-0 m-0  p-0 mb-3">
              <Card.Title className="text-mediumgrey text-uppercase fs-6">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="text-lightgrey fs-6">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="top"
              src="../public/assets/images/1a.png"
              className="rounded-4"
            />
          </Card>
        </div>
        <div>
          <Card className="bg-transparent my-3 mx-2">
            <Card.Body className="border-0 m-0  p-0 mb-3">
              <Card.Title className="text-mediumgrey text-uppercase fs-6">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="text-lightgrey fs-6">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="top"
              src="../public/assets/images/1b.png"
              className="rounded-4"
            />
          </Card>
        </div>
        <div>
          <Card className="bg-transparent my-3 mx-2">
            <Card.Body className="border-0 m-0  p-0 mb-3">
              <Card.Title className="text-mediumgrey text-uppercase fs-6">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="text-lightgrey fs-6">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="top"
              src="../public/assets/images/1c.png"
              className="rounded-4"
            />
          </Card>
        </div>
      </Slider>
    </div>
  )
}
export default Novità
