
import React from 'react'
import useSWR from 'swr'
import clsx from 'clsx'
import Image from 'next/image'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getMovie } from '../../api/movieApi'
import { getUrlSearchMovieById } from '../../utils/movie'

import Layout from '../../components/Layout'
import { Spinner } from '../../components/Spinner'
import placeholderImage from "../../public/placeholder-film.png"

const MovieDetail: NextPage = () => {

  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const url = React.useMemo<string>(() => getUrlSearchMovieById(id as string), [id])
  const fetcher = React.useCallback(async () => await getMovie(url), [url])

  const { data: movie, error, isLoading } = useSWR(url, fetcher)

  if (error) return <Layout><p>Une erreur est survenue</p></Layout>
  if (isLoading) return <Layout><Spinner color={"purple"} size={"80px"} /></Layout>
  if (!movie) return <Layout><p>Aucun résultat</p></Layout >
  return (
    <Layout>
      <div className={clsx("flex flex-col justify-center items-center py-12")}>
        <Image
          src={movie.Poster === "N/A" ? placeholderImage : movie?.Poster}
          alt={movie.Title}
          width={150}
          height={150}
          className={clsx("object-cover h-64 w-64 shadow-lg")}
        />
        <h1 className={clsx("pt-12")}>{movie?.Title}</h1>
        <h3 className={clsx("p-2")}>{movie?.Gender}</h3>
        <p className={clsx("italic")}>{movie?.Year}</p>
        <p className={clsx("italic")}>{movie?.Actors}</p>
        <p className={clsx("italic")}>{movie?.Director}</p>
        <div className={clsx("text-center w-1/2 bg-white rounded bg-opacity-50 m-12")}>
          <p className={clsx("p-2")}>
            {movie?.Plot}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default MovieDetail