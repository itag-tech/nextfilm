import { expect, test, describe } from 'vitest'
import { getUrlSearchMovieByTitle, getUrlSearchMovieById } from './movie'

describe('movieUtils', () => {
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