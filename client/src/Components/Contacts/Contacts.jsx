import react, { useState } from 'react';
import '../Page/PageContent.css';
import ContactForm from './ContactForm';
import './Contacts.css'
import ContactsSidebar from './ContactsSidebar';

function Contacts(props) {

    return (
        <div>
            <div id="page-title">
                <div className="row">
                    <div className="ten columns centered text-center">
                        <h1>Get In Touch<span>.</span></h1>

                        <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
      enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. </p>
                    </div>
                </div>
            </div>
            <div className="content-outer">
                <div id="page-content" className="row page">
                    <div id="primary" className="eight columns">
                        <section>
                            <h1>Hello. Let's talk.</h1>
                            <p className="lead">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
        cursus a sit amet mauris. Morbi accumsan ipsum velit. </p>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                            cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
        ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>
                            <ContactForm/>
                        </section>
                    </div>
                    <ContactsSidebar/>
                </div>
            </div>
        </div>);
}

export default Contacts;