import style from './Layout.module.css';
import MainNavigation from './MainNavigation';
import {Route,Routes} from 'react-router-dom';
import AllMeetupPage from '../../pages/AllMeetup';
import FavoritPage from '../../pages/Favorit';
import NewMeetupPage from '../../pages/NewMeetup';

function Layout(props){
return (<div>
   <MainNavigation></MainNavigation>
       <main className={style.main}>{props.children}</main>
      
</div>)
}
export default Layout; 