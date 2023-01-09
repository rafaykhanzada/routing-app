import Card from "../ui/Card";
import style from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorit-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const ItemIsFavorite = favoritesCtx.ItemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (ItemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {ItemIsFavorite ? "Remove From Favorite" : "Add To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
