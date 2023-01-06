import {Route,Routes} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupPage from './pages/AllMeetup';
import FavoritPage from './pages/Favorit';
import NewMeetupPage from './pages/NewMeetup';
function App() {
  return (
   <div>
    
    <Layout>
     <Routes>
      <Route path='/' element={<AllMeetupPage />} />
      <Route path='new-meetup' element={<NewMeetupPage />} />
      <Route path='fav-meetup' element={<FavoritPage />} />
    </Routes>
    </Layout>
   </div>
  );
}

export default App;
