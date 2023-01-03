import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import HomePage from "../pages/index"
import App from "../pages/_app"

describe("Home page", () => {
  it("should render as usual", () => {
    // when ----------------
    // @ts-ignore - FIXME: fix this typescript error
    const { container } = render(<App Component={HomePage} pageProps={null}></App>)

    // then ----------------
    expect(container).toMatchSnapshot()
  })
})