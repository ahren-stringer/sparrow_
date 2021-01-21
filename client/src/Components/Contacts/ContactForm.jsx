import react, { useState } from 'react';
import '../Page/PageContent.css';
import './Contacts.css'
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'

const input = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <>
            <label for={name}>{label}<span className="required">*</span></label>
            <input {...input} name={name} type={type} id={name} size="35" />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </>
    )
}
const subjectInput = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label for={name}>{label}</label>
            <input {...input} name={name} type={type} id={name} size="35" />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    )
}
const textarea = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label for={name}>{label}</label>
            <textarea {...input} name={name} id={name} rows="10" cols="50" ></textarea>
        </div>
    )
}

function ContactReduxForm(props) {
    const { submitting } = props

    return <form onSubmit={props.handleSubmit} name="contactForm" id="contactForm">
        <fieldset>
            <div className="half">
                <Field
                    name="contactName"
                    type="text"
                    component={input}
                    label="Имя"
                    validate={[required]}
                    warn={aol}
                />
            </div>
            <div className="half pull-right">
                <Field
                    name="contactEmail"
                    type="email"
                    component={input}
                    label="Email"
                    validate={[required, email]}
                    warn={aol}
                />
            </div>
            <div>
                <Field
                    name="contactSubject"
                    type="text"
                    component={subjectInput}
                    label="Профессия"
                    validate={[required, minLength6]}
                    warn={aol}
                />
            </div>
            <Field
                name="contactMessage"
                //type="a"
                component={textarea}
                label="Сообщение"
                validate={[required]}
            // warn={aol}
            />
            <div>
                <button type="submit" className="submit" disabled={submitting}>Отправить</button>
                <span id="image-loader">
                    <img src="images/loader.gif" alt="" />
                </span>
            </div>
        </fieldset>
    </form>
}

ContactReduxForm = reduxForm({ form: 'contact' })(ContactReduxForm)

function ContactForm(props) {
    let submit = async (formData) => {
        //props.loginThunk(formData.email, formData.password, formData.rememberMe)
        try {
           // await axios.post('http://localhost:8001/register', { ...formData })
            props.history.goBack()
        } catch (e) { }
    }

    return (
        <div id="contact-form">
            <ContactReduxForm onSubmit={submit} />
            {/* <form name="contactForm" id="contactForm" method="post" action="">
                <fieldset>

                    <div className="half">
                        <label for="contactName">Name <span className="required">*</span></label>
                        <input name="contactName" type="text" id="contactName" size="35" value="" />
                    </div>

                    <div className="half pull-right">
                        <label for="contactEmail">Email <span className="required">*</span></label>
                        <input name="contactEmail" type="text" id="contactEmail" size="35" value="" />
                    </div>

                    <div>
                        <label for="contactSubject">Subject</label>
                        <input name="contactSubject" type="text" id="contactSubject" size="35" value="" />
                    </div>

                    <div>
                        <label for="contactMessage">Message <span className="required">*</span></label>
                        <textarea name="contactMessage" id="contactMessage" rows="15" cols="50" ></textarea>
                    </div>

                    <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                            <img src="images/loader.gif" alt="" />
                        </span>
                    </div>

                </fieldset>
            </form> */}
            <div id="message-warning"></div>

            <div id="message-success">
                <i className="icon-ok"></i>Your message was sent, thank you!<br />
            </div>

        </div>);
}

export default ContactForm;