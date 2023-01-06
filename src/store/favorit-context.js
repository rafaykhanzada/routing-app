import { createContext } from "react";

const FavoritesContext = createContext({
  favorit: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
}
