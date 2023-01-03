import React from "react"
import { render, waitFor, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { rest } from "msw"
import { setupServer } from 'msw/node'
import Collection from "./Collection"

const server = setupServer(
  rest.get("http://www.omdbapi.com/?apikey=4a3b711b&s=Batman", (_, res, ctx) => {
    return res(
      ctx.json({
        Search: [
          {
            Title: "Batman Begins",
            Year: "2005",
            imdbID: "tt0372784",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ5NjQxN15BMl5BanBnXkFtZTgwNjQ5NjQxMzE@._V1_SX300.jpg",
          },
          {
            Title: "Batman v Superman: Dawn of Justice",
            Year: "2016",
            imdbID: "tt2975590",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ5NjQxN15BMl5BanBnXkFtZTgwNjQ5NjQxMzE@._V1_SX300.jpg",
          },
          {
            Title: "Batman",
            Year: "1989",
            imdbID: "tt0096895",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ5NjQxN15BMl5BanBnXkFtZTgwNjQ5NjQxMzE@._V1_SX300.jpg",
          },
        ],
        totalResults: "3",
        Response: "True",
      })
    )
  })
)

beforeAll(async () => {
  // start the server
  server.listen()

  // mock the react context to simulate a user search
  const fakeSearch = { search: 'Batman' }
  vi.spyOn(React, "useContext").mockImplementation(() => fakeSearch)

  // render the component
  render(<Collection />)

  // wait for the data to be fetched
  await waitFor(() => {
    expect(screen.findByText("Batman Begins"))
  })

})

afterAll(() => {
  server.close()
})

describe("Collection", () => {
  it("should display 3 movie cards", async () => {
    const movieCardElements = await screen.findAllByTestId("movie-link")
    expect(movieCardElements).toHaveLength(3)
  })
})