import { useContext } from "react";
import FavoritesContext from "../store/favorit-context";
import MeetupList from "../components/meetup/MeetupList";
function FavoritPage(){
    const favoritesCtx = useContext(FavoritesContext);
 
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorit yet. start adding some.</p>
    }else{
content = <MeetupList meetups={favoritesCtx.favorit}/>
    }
    return <section>
        <h1>My Favorite</h1>
    {content}
    </section>

    }
    
    export default FavoritPage;