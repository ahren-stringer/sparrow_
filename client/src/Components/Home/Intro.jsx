import './Home.css';
import img1 from '../../images/sliders/home-slider-image-01.png'

function Intro() {
  return (
      <section id="intro">

        <div id="intro-slider" className="flexslider">

          <ul className="slides">

            <li>
              <div className="row">
                <div className="twelve columns">
                  <div className="slider-text">
                    <h1>Free amazing site template<span>.</span></h1>
                    <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
                    enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. lacus sit amet luctus lobortis, dolores et quas molestias excepturi
                  enim tellus ultrices elit.</p>
                  </div>
                  <div className="slider-image">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </li>

            {/* <li>
              <div className="row">
                <div className="twelve columns">
                  <div className="slider-text">
                    <h1>Responsive + HTML5 + CSS3<span>.</span></h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti eos et accusamus. amet consequat enim elit noneas sit amet luctu. lacus sit amet luctus lobortis.
                  Aenean condimentum, lacus sit amet luctus.</p>
                  </div>
                  <div className="slider-image">
                    <img src="../../images/sliders/home-slider-image-02.png" alt="" />
                  </div>
                </div>
              </div>
            </li> */}

          </ul>

        </div>

      </section>
  );
}

export default Intro;
