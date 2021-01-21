import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route } from 'react-router-dom';
import Post from './Components/Post/Post';
import Auth from './Components/Auth/Auth';
import Register from './Components/Auth/Register';
import Profile from './Components/Profile/Profile';
import NewPublication from './Components/NewPublication/NewPublication';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Route exact path="/" render={() => <Home/>}/>
      <Route exact path="/blog" render={() => <Blog/>}/>
      <Route exact path="/post" render={() => <Post/>}/>
      <Route exact path="/auth" render={() => <Auth/>}/>
      <Route exact path="/register" render={() => <Register/>}/>
      <Route exact path="/profile" render={() => <Profile/>}/>
      <Route exact path="/publication" render={() => <NewPublication/>}/>
      <Route exact path="/contacts" render={() => <Contacts/>}/>
      <Footer/>
    </div>
  );
}

export default App;
