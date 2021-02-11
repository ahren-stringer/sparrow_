import './Home.css';
import light from "../../images/portfolio/into-the-light.jpg"
import { CircularProgress } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Works(props) {
  if (!props.categories) return <CircularProgress/>
  return (
    <section id="works">

    <div className="row">

      <div className="twelve columns align-center">
        <h1>Категории</h1>
      </div>

      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves">
      {props.categories.map(item=><div className="columns portfolio-item">
          <div className="item-wrap">
            <NavLink to={'/categories/' + item.category}>
              <img alt="" src={item.img} />
              <div className="overlay"></div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
              </NavLink>
            <div className="portfolio-item-meta">
              <h5><NavLink to={'/blog/' + item.category}>{item.category}</NavLink></h5>
              <p>Branding</p>
            </div>
          </div>
        </div>)}

      </div>

    </div>

  </section>
  );
}

export default Works;
