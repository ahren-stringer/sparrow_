import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import {
  setSearched, toggleList, loadList, setReqNumber, setSearchedArr, SearchChange,
  searchThunk,
  CloseListThunk
} from '../../redux/searchReduser';
import { connect } from 'react-redux';

function Header(props) {
  return (
      <header>

        <div className="row">

          <div className="twelve columns">
            <div className="logo">
            <NavLink to='/'><span className="logo__img">Новостной блог</span></NavLink>
            </div>

            <nav id="nav-wrap">

              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

              <ul id="nav" className="nav">

              {/* <NavLink to='/'></NavLink> */}
                <li>
                {/* <span> */}
                    <NavLink to='/blog'>Новости</NavLink>
                {/* </span> */}
                  {/* <ul>
                    <li><a href="blog.html">Blog Index</a></li>
                    <li><a href="single.html">Post</a></li>
                  </ul> */}
                </li>
                {/* <li><span><a href="portfolio-index.html">Portfolio</a></span>
                  <ul>
                    <li><a href="portfolio-index.html">Portfolio Index</a></li>
                    <li><a href="portfolio.html">Portfolio Entry</a></li>
                  </ul>
                </li> */}
                <li><NavLink to='/chanels'>Каналы</NavLink></li>
                <li><NavLink to='/categories'>Категории</NavLink></li>
                {/* <li><NavLink to='/contacts'>Contact</NavLink></li> */}
                {!props.token ? <li><NavLink to='/auth'>Вход</NavLink></li> 
                :<li><NavLink to='/profile'>Профиль</NavLink></li>
                  // <span className='auth__btn inner-item'
                  //   onClick={props.logout}
                  // >Выход</span>
                  }
              </ul>

            </nav>

          </div>

        </div>

      </header>

  );
}

let mapStateToPros = (state) => {
  return {
    counter: state.categoryData.count,
    newSearchText: state.search.newSearchText,
    searched: state.search.searched,
    isClosed: state.search.isClosed,
    isListLoading: state.search.isListLoading,
    liked: state.categoryData.liked,
    requestNumber: state.search.requestNumber,
    token: state.auth.token,
  }
}

export default connect(mapStateToPros, {
  SearchChange, setSearched, toggleList, loadList, setReqNumber, setSearchedArr,
  searchThunk,
  CloseListThunk
})(Header);