import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { Song } from "../types"
import SingleCard from "./SingleCard"
import Slider from "react-slick"
import "../App.css"

type NuoviEpisodiProps = {
  artista: string
}

const NuoviEpisodi = function ({ artista }: NuoviEpisodiProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const urlApi = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  const [musica, setMusica] = useState<Song[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getMusic = function () {
    fetch(urlApi + artista)
      .then((r) => {
        if (r.ok) {
          return r.json()
        } else {
          throw new Error("Errore nel recupero musica")
        }
      })
      .then((songs) => {
        console.log(`RISULTATI DELLA RICERCA ${artista}`, songs.data)
        setMusica(songs.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("ERRORE", err)
      })
  }

  useEffect(() => {
    getMusic()
  }, [])

  useEffect(() => {
    console.log("MUSICA AGGIORNATA", musica)
  }, [musica])
  return (
    <div className="bg-main text-light p-4 border-0">
      {isLoading ? (
        <div>
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <>
          {musica && musica.length > 1 && <h2>{artista}</h2>}
          <Slider {...settings}>
            {musica!.map((m) => (
              <SingleCard song={m} key={m.id} />
            ))}
          </Slider>
        </>
      )}
    </div>
  )
}

export default NuoviEpisodi
