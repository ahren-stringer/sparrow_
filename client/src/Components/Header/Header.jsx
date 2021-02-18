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

      <div className="row" style={{ position: "relative" }}>

        <div className="twelve columns">
          <div className="logo">
            <NavLink to='/'><span className="logo__img">Новостной блог</span></NavLink>
          </div>

          <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li><NavLink to='/blog'>Новости</NavLink></li>
              <li><NavLink to='/chanels'>Каналы</NavLink></li>
              <li><NavLink to='/categories'>Категории</NavLink></li>
              {
                !props.token
                  ? <li><NavLink to='/auth'>Вход</NavLink></li>
                  : <li><NavLink to='/profile'>Профиль</NavLink></li>
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