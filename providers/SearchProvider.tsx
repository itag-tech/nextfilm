import React from 'react'

enum ActionType {
  ADD_SEARCH = 'ADD_SEARCH',
  UPDATE_SEARCH = 'UPDATE_SEARCH',
  CLEAR_SEARCH = 'CLEAR_SEARCH',
}

type SearchAction = {
  type: ActionType,
  payload: string,
}

type SearchContextType = {
  search: string,
  updateSearch: (value: string) => void,
  searchDispatch: React.Dispatch<SearchAction>,
}

const SearchContext = React.createContext<SearchContextType | undefined>(undefined)

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, searchDispatch] = React.useReducer((state: string, action: SearchAction) => {
    switch (action.type) {
      case ActionType.ADD_SEARCH:
      case ActionType.UPDATE_SEARCH:
        return action.payload
      case ActionType.CLEAR_SEARCH:
        return ''
      default:
        return state
    }
  }, '')

  const updateSearch = (value: string) => {
    const dispatchType = Boolean(search)
      ? Boolean(value)
        ? ActionType.UPDATE_SEARCH
        : ActionType.CLEAR_SEARCH
      : ActionType.ADD_SEARCH
    searchDispatch({ type: dispatchType, payload: value })
  }

  return (
    <SearchContext.Provider value={{ search, updateSearch, searchDispatch }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = React.useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}

export { SearchProvider, useSearch }