import React, { FC } from "react"
import clsx from "clsx"
import { useSearch } from "../providers/SearchProvider"

const SearchBar: FC = () => {

  const { search, updateSearch } = useSearch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateSearch(value)
  }

  return (
    <div id={"search-bar"} className={clsx("border-b-8 w-full text-center p-12")}>
      <input
        onChange={handleChange}
        className={clsx("text-center rounded w-full md:max-w-md p-3")}
        value={search}
        placeholder="Rechercher un film"
      />
    </div>
  )
}

export default SearchBar