import { Card } from "react-bootstrap"
import { Song } from "../types"

interface SingleSongProps {
  song: Song
}

const SingleCard = function (props: SingleSongProps) {
  return (
    <>
      <div>
        <Card className="bg-transparent my-3 mx-2 border-0">
          <Card.Img
            variant="top"
            src={props.song.album.cover_big}
            className="rounded-3"
          />
          <Card.Body className="border-0 m-0  p-0 mb-3">
            <Card.Title className="text-lightgrey text-uppercase fs-6 mt-2">
              {props.song.title}
            </Card.Title>
            <Card.Text className="text-mediumgrey">
              {props.song.artist.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default SingleCard
