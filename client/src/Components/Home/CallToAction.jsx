import './Home.css';

function CallToAction() {
    return (
        <section id="call-to-action">

            <div className="row">

                <div className="eight columns offset-1">

                    <h1><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Host This Template on Dreamhost.</a></h1>
                    <p>Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
Get <span>$50 off</span> when you sign up with the promocode <span>STYLESHOUT</span>.
{/* <!-- Simply type	the promocode in the box labeled “Promo Code” when placing your order. --> */}
                    </p>

                </div>

                <div className="three columns action">

                    <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT" className="button">Sign Up Now</a>

                </div>

            </div>

        </section>
    );
}

export default CallToAction;
