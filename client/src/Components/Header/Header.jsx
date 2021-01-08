import './Header.css';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <header>

        <div className="row">

          <div className="twelve columns">
            <div className="logo">
            <NavLink to='/'><img alt="" src={logo} /></NavLink>
            </div>

            <nav id="nav-wrap">

              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

              <ul id="nav" className="nav">

              <NavLink to='/'><a href="index.htm">Home</a></NavLink>
                <li>
                {/* <span> */}
                    <NavLink to='/blog'>Blog</NavLink>
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
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/features'>Features</NavLink></li>

              </ul>

            </nav>

          </div>

        </div>

      </header>

  );
}

export default Header;
