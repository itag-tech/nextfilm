import { StaticImageData } from "next/image"
import { Movie } from "../models/Movie"
import placeholderImage from "../public/placeholder-film.png"

// API objects & methods -------------------------------------------------

const omdbApiBaseUrl = process.env.NEXT_PUBLIC_OMDB_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const authorizedUrl = `${omdbApiBaseUrl}?apikey=${apiKey}`

export const getUrlSearchMovieByTitle: (title: string) => string = (title) => {
  return `${authorizedUrl}&s=${title}`
}

export const getUrlSearchMovieById: (id: string) => string = (id) => {
  return `${authorizedUrl}&i=${id}`
}

// Movie type methods ----------------------------------------------------

export const getPoster: (movie: Movie) => StaticImageData | string = (movie) => {
  // Note : Prefering render an image placeholder instead of a broken image
  return (movie.Poster === "N/A" && placeholderImage) || movie.Poster
}