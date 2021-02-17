import { CircularProgress } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import './Home.css';

function Jornal(props) {
  debugger
  // if (!props.posts) return <CircularProgress/>
  return (
    <section id="journal">

    {!props.posts  ? <Preloader/>
    :<>
    <div className="row">
      <div className="twelve columns align-center">
        <h1>Последние новости</h1>
      </div>
    </div>

    <div className="blog-entries">

      {props.posts.map(item => <article className="row entry">

        <div className="entry-header">

          <div className="permalink">
            <NavLink to={'/post/' + item.title}><i className="fa fa-link"></i></NavLink>
          </div>

          <div className="ten columns entry-title pull-right">
            <h3><NavLink to={'/post/' + item.title}>{item.title}</NavLink></h3>
          </div>

          <div className="two columns post-meta end">
            <p>
              <time datetime="2014-01-31" className="post-date" pubdate="">{item.data.replace( /-/g, "." )
                                    .match(/[\d\.]+/)
                                    .join('')}</time>
              <span className="dauthor">{item.author.name}</span>
            </p>
          </div>

        </div>

        <div className="ten columns offset-2 post-content">
          <p>{item.subtitle}
     {/* <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a> */}
     </p>
        </div>

      </article>)}

    </div>
    </>}

  </section>

  );
}

export default Jornal;
