import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Blog from './Components/Blog/BlogContainer';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, withRouter } from 'react-router-dom';
import Post from './Components/Post/PostContainer';
import Auth from './Components/Auth/Auth';
import Register from './Components/Auth/Register';
import Profile from './Components/Profile/ProfileContainer';
import NewPublication from './Components/NewPublication/NewPublicationContainer';
import Contacts from './Components/Contacts/Contacts';
import { setToken, setUserId, setLogin, setLoaded } from './redux/authReduser'
import {CloseListThunk } from './redux/searchReduser';
import ContainerCategories from './Components/Categoties/ContainerCategories';
import SearchContainer from './Components/Search/SearchContainer';

function App(props) {
  const login = useCallback((jwtToken, id) => {
    props.setToken(jwtToken)
    props.setUserId(id)
    localStorage.setItem('userData', JSON.stringify({ userId: id, token: jwtToken }))
  }, []);

  props.setLogin(login)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {
      login(data.token, data.userId)
    }
    props.setLoaded(true)
  }, [login]);
  return (
    <div classNameName="App">
      <Header/>
      <Route exact path="/" render={() => <Home/>}/>
      <Route exact path="/blog/:category?" render={() => <Blog/>}/>
      <Route exact path="/post/:postName?" render={() => <Post/>}/>
      <Route exact path="/auth" render={() => <Auth/>}/>
      <Route exact path="/register" render={() => <Register/>}/>
      <Route exact path="/profile" render={() => <Profile/>}/>
      <Route exact path="/publication" render={() => <NewPublication/>}/>
      <Route exact path="/contacts" render={() => <Contacts/>}/>
      <Route exact path="/categories/" render={() => <ContainerCategories/>}/>
      <Route exact path="/search/:search" render={() => <SearchContainer/>}/>
      <Footer/>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isClosed: state.search.isClosed,
    loaded: state.auth.loaded,
    token: state.auth.token,
    userId: state.auth.userId,
  }
}

export default connect(mapStateToProps, { setToken, setUserId, setLogin, setLoaded,
  CloseListThunk })(withRouter(App));
