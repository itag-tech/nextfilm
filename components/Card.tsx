import { FC } from "react"
import clsx from "clsx"
import Image from "next/image"

import { Movie } from "../models/Movie"
import placeholderImage from "../public/placeholder-film.png"

type CardProps = {
  movie: Movie
}

const Card: FC<CardProps> = ({ movie }) => {

  const poster = (movie.Poster === "N/A" && placeholderImage) || movie.Poster

  return (
    <div className={clsx("flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-lg shadow-md truncate h-64 w-80")}>
      <Image
        src={poster}
        alt={movie.Title}
        width={200}
        height={200}
        className={clsx("h-32 w-32 object-cover shadow-lg")}
      />
      <div className={clsx("flex flex-col justify-center items-center")}>
        <p className={clsx("text-xl font-medium truncate max-w-xs text-purple-700 m-4 px-6")}>{movie.Title}</p>
        <p className={clsx("text-sm font-medium text-purple-400")}>{movie.Year}</p>
      </div>
    </div >
  )
}

export default Card