import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorit-context';
import styles from './MainNavigation.module.css';
function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetup</Link>
          </li>
          <li>
            <Link to='/fav-meetup'>Favorit <span className={styles.badge}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
