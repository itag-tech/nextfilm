import { FC } from "react"
import clsx from "clsx"
import Image from "next/image"
import { getPoster } from "../../utils/movieUtils"
import { Movie } from "../../models/Movie"

type CardProps = {
  movie: Movie
}

const Card: FC<CardProps> = ({ movie }) => {
  return (
    <div
      className={clsx("flex flex-col justify-center items-center bg-white",
        "bg-opacity-50 rounded-lg shadow-md truncate w-full p-6")}
    >
      <Image
        src={getPoster(movie)}
        alt={movie.Title}
        width={200}
        height={200}
        className={clsx("h-32 w-32 object-cover shadow-lg")}
      />
      <div className={clsx("flex flex-col justify-center items-center")}>
        <p className={clsx("text-sm md:text-lg font-medium truncate max-w-xxs xl:max-w-xs text-purple-700 m-4 px-6")}>{movie.Title}</p>
        <p className={clsx("text-sm font-medium text-purple-400")}>{movie.Year}</p>
      </div>
    </div >
  )
}

export default Card