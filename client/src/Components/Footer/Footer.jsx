import './Footer.css';

function Footer() {
  return (
      <footer>

        <div className="row">

          <div className="twelve columns">

            <ul className="footer-nav">
              <li><a href="#">Home.</a></li>
              <li><a href="#">Blog.</a></li>
              <li><a href="#">Portfolio.</a></li>
              <li><a href="#">About.</a></li>
              <li><a href="#">Contact.</a></li>
              <li><a href="#">Features.</a></li>
            </ul>

            <ul className="footer-social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-skype"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>

            <ul className="copyright">
              <li>Copyright &copy; 2014 Sparrow</li>
              <li>Design by <a href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>

          <div id="go-top" style={{display: 'block'}}><a title="Back to Top" href="#">Go To Top</a></div>

        </div>

      </footer>
  );
}

export default Footer;
