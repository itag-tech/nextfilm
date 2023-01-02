import axios from 'axios'
import { MovieCollectionResponse } from '../models/Collection'
import { Movie } from '../models/Movie'

export const getMovies = async (url: string): Promise<MovieCollectionResponse> => {
  try {
    const response = await axios.get(url)
    // TODO - custom errors handling switch status code
    if (response.status !== 200) {
      console.error("Error calling API - collection route", response.status, url)
      throw new Error("Error calling API - collection route")
    }

    const { data } = response
    return data as MovieCollectionResponse

  } catch (error) {
    console.error("API call failed - collection route", error)
    throw error
  }
}

export const getMovie = async (url: string): Promise<Movie> => {
  try {
    const response = await axios.get(url)

    // TODO - custom errors handling switch status code
    if (response.status !== 200) {
      console.error("Error calling API - movie route", response.status)
      throw new Error("Error calling API - movie route")
    }

    const { data } = response
    return data as Movie

  } catch (error) {
    console.error("API call failed - movie route", error)
    throw error
  }
}

