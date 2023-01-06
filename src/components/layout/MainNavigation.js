import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetup</Link>
          </li>
          <li>
            <Link to='/fav-meetup'>Favorit</Link>
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
