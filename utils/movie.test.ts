import { expect, test, describe } from 'vitest'
import { Movie } from '../models/Movie'
import { getUrlSearchMovieByTitle, getUrlSearchMovieById, getPoster } from './movie'

describe('movieUtils - API objects & methods testing', () => {
  test('getUrlSearchMovieByTitle', () => {
    const title = 'test'
    const url = getUrlSearchMovieByTitle(title)
    expect(url).toBe('http://www.omdbapi.com/?apikey=1234&s=test')
  })
  test('getUrlSearchMovieById', () => {
    const id = '852123'
    const url = getUrlSearchMovieById(id)
    expect(url).toBe('http://www.omdbapi.com/?apikey=1234&i=852123')
  })
})

describe('movieUtils - Movie type methods testing', () => {
  const movie: Movie = {
    Poster: 'N/A',
    Title: 'test',
    Year: '2021',
    imdbID: '852123',
    Type: 'movie',
    Plot: 'test',
    Gender: 'test',
  }
  test('Poster is N/A, getPoster method return a placeholder', () => {
    const poster = getPoster(movie)
    expect(poster).toBe('/public/placeholder-film.png')
  })
  test('Poster is defined, getPoster method return a string', () => {
    const movieUpdated = { ...movie, Poster: 'aws.com/1234.png' }
    const poster = getPoster(movieUpdated)
    expect(poster).toBe('aws.com/1234.png')
  })
})