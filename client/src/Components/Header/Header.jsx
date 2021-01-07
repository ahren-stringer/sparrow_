import './Header.css';
import logo from '../../images/logo.png'

function Header() {
  return (
      <header>

        <div className="row">

          <div className="twelve columns">
            <div className="logo">
              <a href="index.html"><img alt="" src={logo} /></a>
            </div>

            <nav id="nav-wrap">

              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

              <ul id="nav" className="nav">

                <li className="current"><a href="index.htm">Home</a></li>
                <li><span><a href="blog.html">Blog</a></span>
                  <ul>
                    <li><a href="blog.html">Blog Index</a></li>
                    <li><a href="single.html">Post</a></li>
                  </ul>
                </li>
                <li><span><a href="portfolio-index.html">Portfolio</a></span>
                  <ul>
                    <li><a href="portfolio-index.html">Portfolio Index</a></li>
                    <li><a href="portfolio.html">Portfolio Entry</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="styles.html">Features</a></li>

              </ul>

            </nav>

          </div>

        </div>

      </header>

  );
}

export default Header;
