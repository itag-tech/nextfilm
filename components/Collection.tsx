import React, { FC } from 'react'
import useSWR from 'swr'
import clsx from 'clsx'
import Link from 'next/link'

import { useSearch } from '../providers/SearchProvider'
import { getMovies } from '../api/movieApi'
import { getUrlSearchMovieByTitle } from '../utils/movie'

import MovieCard from '../components/Card'
import { Spinner } from '../components/Spinner'

const Collection: FC = () => {

  const { search: inputValue } = useSearch()

  const isCallable: boolean = inputValue.length >= 3
  const url = React.useMemo<string>(() => getUrlSearchMovieByTitle(inputValue), [inputValue])
  const fetcher = React.useCallback(async () => await getMovies(url), [url])

  const { data, error, isLoading } = useSWR(isCallable ? url : null, fetcher)

  const movies = data?.Search || []
  const isMovies = movies.length > 0

  // conditionn rendering ------------------------------
  // case 1 - error
  if (error) return <CollectionLayout><p>Une erreur est survenue</p></CollectionLayout>
  // case 2 - loading
  if (isLoading) return <CollectionLayout><Spinner color={"purple"} size={"80px"} /></CollectionLayout>
  // case 3 - no result
  if (inputValue && !isMovies) return (
    <CollectionLayout>
      <p className={clsx("m-auto")}>
        Aucun résultat - Assurez-vous que la recherche fasse au moins 3 caractères
      </p>
    </CollectionLayout>
  )
  // case 4 - result
  if (isMovies) return (
    <CollectionLayout>
      <div className={clsx("grid grid-cols-4 grid-rows-auto gap-4 w-full")}>
        {movies.map((movie) => (
          <Link
            key={movie.imdbID}
            href={`/movie/${movie.imdbID}`}
          // as={`/movie/${movie.Title}`}
          >
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          </Link>
        ))}
      </div>
    </CollectionLayout>
  )
  // case 5 - default fallback (mandatory)
  return <></>
}

export default Collection

// ------------------------------
// internal component
// ------------------------------

type CollectionLayoutProps = {
  children?: React.ReactNode
}

const CollectionLayout = ({ children }: CollectionLayoutProps) => {
  return (
    <div id={"movie-collection"} className={"flex flex-row w-full mt-12"}>
      {children}
    </div>
  )
}