import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorit: [],
  totalFavorites: 0,
  addFavorite: (favoritMeetup)=>{},
  removeFavorite: (meetupId)=>{},
  ItemIsFavorite: (meetupId)=>{},
});

export function FavoritesContextProvider(props) {
  const [userFavroitse, setUserFavroitse] = useState([]);
  function addFrvtHandler(favoritMeetup) {
    setUserFavroitse((prevUserFavorite) => {
      return prevUserFavorite.concat(favoritMeetup);
    });
  }
  function removeFrvtHandler(meetupId) {
    setUserFavroitse((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function ItemIsFrvtHandler(meetupId) {
    return userFavroitse.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorit: userFavroitse,
    totalFavorites: userFavroitse.length,
    addFavorite: addFrvtHandler,
    removeFavorite: removeFrvtHandler,
    ItemIsFavorite: ItemIsFrvtHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;