import './Home.css';
import geometric from "../../images/portfolio/geometrics.jpg"
import console from "../../images/portfolio/console.jpg"
import camera from "../../images/portfolio/camera-man.jpg"
import light from "../../images/portfolio/into-the-light.jpg"

function Works() {
  return (
    <section id="works">

    <div className="row">

      <div className="twelve columns align-center">
        <h1>Some of our recent works.</h1>
      </div>

      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves">

        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="portfolio.html">
              <img alt="" src={geometric} />
              <div className="overlay"></div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <div className="portfolio-item-meta">
              <h5><a href="portfolio.html">Geometrics</a></h5>
              <p>Illustration</p>
            </div>
          </div>
        </div>

        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="portfolio.html">
              <img alt="" src={console} />
              <div className="overlay"></div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <div className="portfolio-item-meta">
              <h5><a href="portfolio.html">Console</a></h5>
              <p>Web Development</p>
            </div>
          </div>
        </div>

        <div className="columns portfolio-item s-first">
          <div className="item-wrap">
            <a href="portfolio.html">
              <img alt="" src={camera} />
              <div className="overlay"></div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <div className="portfolio-item-meta">
              <h5><a href="portfolio.html">Camera Man</a></h5>
              <p>Photography</p>
            </div>
          </div>
        </div>

        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="portfolio.html">
              <img alt="" src={light} />
              <div className="overlay"></div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <div className="portfolio-item-meta">
              <h5><a href="portfolio.html">Into The Light</a></h5>
              <p>Branding</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
  );
}

export default Works;
