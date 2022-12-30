const omdbApiBaseUrl = process.env.NEXT_PUBLIC_OMDB_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const authorizedUrl = `${omdbApiBaseUrl}?apikey=${apiKey}`

export const getUrlSearchMovieByTitle = (title: string): string => {
  return `${authorizedUrl}&s=${title}`
}

export const getUrlSearchMovieById = (id: string): string => {
  return `${authorizedUrl}&i=${id}`
}