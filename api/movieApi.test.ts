import axios from "axios"
import { expect, it, vi, describe, Mock } from "vitest"
import { getMovies } from "./movieApi"

vi.mock("axios")

describe("Movie API", () => {
  const mockedResponseWithoutStatus = {
    data: {
      Response: "True",
      totalResults: "2",
      Search: [
        {
          imdbID: "1234",
          Title: "Titre 1",
          Year: "2013",
          Type: "Action",
          Poster: "aws.com/1234.png",
          Gender: "Action",
          Plot: "Synopsis 1",
        },
        {
          imdbID: "4567",
          Title: "Titre 2",
          Year: "2013",
          Type: "Humour",
          Poster: "aws.com/4567.png",
          Gender: "Humour",
          Plot: "Synopsis 2",
        }
      ]
    }
  }
  // Test 1
  it("should return a list of movies if response status === 200", async () => {
    // given -------------------
    const mockedResponse = {
      ...mockedResponseWithoutStatus,
      status: 200
    };
    (axios.get as Mock).mockResolvedValueOnce(mockedResponse)

    // when -------------------
    const response = await getMovies("")

    // then -------------------
    const { data } = mockedResponse
    expect(response).toEqual(data)
  })


  // Test 2
  it("should throw a new error if status !== 200", async () => {
    // given -------------------
    const mockedResponse = {
      ...mockedResponseWithoutStatus,
      status: 404
    };

    // when -------------------
    (axios.get as Mock).mockResolvedValueOnce(mockedResponse)

    // then -------------------
    expect(async () => await getMovies("")).rejects.toThrow(new Error("Error calling API - collection route"))
  })
})