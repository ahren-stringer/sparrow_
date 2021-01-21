import react, { useState } from 'react';
import '../Page/PageContent.css';
import './Contacts.css'

function ContactsSidebar(props) {
    return (
        <div id="secondary" className="four columns end">

                        <aside id="sidebar">

                            <div className="widget widget_search">
                                <h5>Search</h5>
                                <form action="#">

                                    <input className="text-search" type="text" onfocus="if (this.value == 'Search here...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Search here...'; }" value="Search here..." />
                                    <input type="submit" className="submit-search" value="" />

                                </form>
                            </div>

                            <div className="widget widget_text">
                                <h5 className="widget-title">Text Widget</h5>
                                <div className="textwidget">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. </div>
                            </div>

                            <div className="widget widget_contact">
                                <h5>Address and Phone</h5>
                                <p className="address">Sparrow Studio<br />1600 Amphitheatre Parkway <br />Mountain View, CA 94043 US<br />
                                    <span>(123) 456-7890</span>
                                </p>

                                <h5>Email and Social</h5>
                                <p>
                                    E-mail: info@sparrow.com<br />
               Twitter: <a href="#">@sparrow</a><br />
               Facebook: <a href="#">sparrow FB page</a><br />
               Google+: <a href="#">sparrow G+ page</a>
                                </p>
                            </div>

                        </aside>

                    </div>
);
}

export default ContactsSidebar;