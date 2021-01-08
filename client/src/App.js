import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Route exact path="/" render={() => <Home/>}/>
      <Route exact path="/blog" render={() => <Blog/>}/>
      <Footer/>
    </div>
  );
}

export default App;
