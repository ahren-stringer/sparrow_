import './Home.css';

function Tweets() {
  return (
    <section id="tweets">

    <div className="row">

      <div className="tweeter-icon align-center">
        <i className="fa fa-twitter"></i>
      </div>

      <ul id="twitter" className="align-center">
        <li>
          <span>
            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
     <a href="#">http://t.co/CGIrdxIlI3</a>
          </span>
          <b><a href="#">2 Days Ago</a></b>
        </li>
        {/* <!--
  <li>
     <span>
     This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
     Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
     <a href="#">http://t.co/CGIrdxIlI3</a>
     </span>
     <b><a href="#">3 Days Ago</a></b>
  </li>
  --> */}
      </ul>

      <p className="align-center"><a href="#" className="button">Follow us</a></p>

    </div>

  </section>
  );
}

export default Tweets;
