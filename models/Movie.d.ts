export type Movie = {
  imdbID: string,
  Title: string,
  Year: string,
  Type: string,
  Poster: string,
  Gender: string,
  Plot: string,
  [key: string]: string | undefined
  // TODO - Add more fields
}