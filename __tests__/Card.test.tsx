import { describe, expect, it } from "vitest"
import { render, screen, within } from '@testing-library/react'
import Card from "../components/Card"

describe("Card", () => {
  it("should render correctly", () => {
    const movie = {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTMwNjQ5NjQxN15BMl5BanBnXkFtZTgwNjQ2NjUyMjE@._V1_SX300.jpg",
      Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      Gender: "Action, Adventure, Drama",
    }
    const { container } = render(<Card movie={movie} />)
    expect(screen.getByRole('img', { name: movie.Title })).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})