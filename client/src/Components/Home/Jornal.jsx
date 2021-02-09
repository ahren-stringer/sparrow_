import { CircularProgress } from '@material-ui/core';
import './Home.css';

function Jornal(props) {
  if (!props.posts) return <CircularProgress/>
  return (
    <section id="journal">

    <div className="row">
      <div className="twelve columns align-center">
        <h1>Our latest posts and rants.</h1>
      </div>
    </div>

    <div className="blog-entries">

      <article className="row entry">

        <div className="entry-header">

          <div className="permalink">
            <a href="single.html"><i className="fa fa-link"></i></a>
          </div>

          <div className="ten columns entry-title pull-right">
            <h3><a href="single.html">Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin auctor.</a></h3>
          </div>

          <div className="two columns post-meta end">
            <p>
              <time datetime="2014-01-31" className="post-date" pubdate="">Jan 31, 2014</time>
              <span className="dauthor">By Sakura Haruno</span>
            </p>
          </div>

        </div>

        <div className="ten columns offset-2 post-content">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
     <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a></p>
        </div>

      </article>
      {/* <!-- Entry End -->

<!-- Entry --> */}
      <article className="row entry">

        <div className="entry-header">

          <div className="permalink">
            <a href="single.html"><i className="fa fa-link"></i></a>
          </div>

          <div className="ten columns entry-title pull-right">
            <h3><a href="single.html">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed.</a></h3>
          </div>

          <div className="two columns post-meta end">
            <p>
              <time datetime="2014-01-29" className="post-date" pubdate="">Jan 30, 2014</time>
              <span className="dauthor">By John Doe</span>
            </p>
          </div>

        </div>

        <div className="ten columns offset-2 post-content">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
     <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a></p>
        </div>

      </article>
      {/* <!-- Entry End -->

<!-- Entry --> */}
      <article className="row entry">

        <div className="entry-header">

          <div className="permalink">
            <a href="single.html"><i className="fa fa-link"></i></a>
          </div>

          <div className="ten columns entry-title pull-right">
            <h3><a href="blog-single.html">Quis autem vel esse eum iure reprehenderit qui in ea voluptate velit esse.</a></h3>
          </div>

          <div className="two columns post-meta end">
            <p>
              <time datetime="2014-01-28" className="post-date" pubdate="">Jan 28, 2014</time>
              <span className="dauthor">By Naruto Uzumaki</span>
            </p>
          </div>

        </div>

        <div className="ten columns offset-2 post-content">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
     <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a></p>
        </div>

      </article>
      {/* <!-- Entry End --> */}

    </div>
    {/* <!-- Entries End --> */}

  </section>

  );
}

export default Jornal;
