import React, { createContext } from "react"

// First, we have to prepare some data and functions, that we're later gonna use
// in our reducer

const initialState = {
    openMenu: false,
    // onPageTransition: false,
}

const actions = {
    SET_MENU: "SET_MENU",
    // SET_ON_PAGE_TRANSITION: "ON_PAGE_TRANSITION"
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_MENU:
        return { ...state, openMenu: action.value }
    // case actions.SET_ON_PAGE_TRANSITION:
    //     return { ...state, onPageTransition: action.value }
    default:
        return state
  }
}

const GlobalContext = createContext("")

const GlobalContextProvider = ({ children }) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = {
    openMenu: state.openMenu,
    setOpenMenu: value => {
      dispatch({ type: actions.SET_MENU, value })
    },
    // onPageTransition: state.onPageTransition,
    // setOnPageTransition: value => {
    //   dispatch({ type: actions.SET_ON_PAGE_TRANSITION, value })
    // },
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

// The exported GlobalContextProvider will only be used in our layout/index.js,
// while the general GlobalContext can be used by any Page or Component (with
// the help of useContext).

export { GlobalContextProvider as default, GlobalContext }