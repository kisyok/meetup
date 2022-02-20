import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from 'react'
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.isFavourite(props.id)

  function toggleFavouriteStatus() {
    if(itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id)
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatus}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
