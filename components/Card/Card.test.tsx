import { describe, expect, it } from "vitest"
import { render } from '@testing-library/react'
import Card from "./Card"

describe("Card", () => {
  // given
  const movie = {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "/imagepath.jpg",
    Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    Gender: "Action, Adventure, Drama",
  }
  it("should render as usual", () => {

    // when ----------------
    const { container } = render(<Card movie={movie} />)

    // then ----------------
    expect(container).toMatchSnapshot()
  })


  // Test 2
  it("should render a src image", () => {
    // when ----------------
    const { container } = render(<Card movie={movie} />)
    const imageElement = container.querySelector('img')

    // then ----------------
    expect(imageElement).toBeDefined()
    if (imageElement) {
      expect(imageElement.hasAttribute('src')).toBe(true)
      const src = imageElement.getAttribute('src')
      expect(src).contain('/_next/image?url=%2Fimagepath.jpg')
    }
  })
})