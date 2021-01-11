//import './Blog.css';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'

const input = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <div className="cf">
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
        <div className="message cf">
            <label for={name}>{label}</label>
            <textarea {...input} name={name} id={name} rows="10" cols="50" ></textarea>
        </div>
    )
}

function PublicationForm(props) {
    const { submitting } = props

    return <form onSubmit={props.handleSubmit}>
        <Field
            name="title"
            type="text"
            component={input}
            label="Заголовок"
            validate={[required]}
            warn={aol}
        />
        <Field
            name="text"
            //type="a"
            component={textarea}
            label="Текст"
            validate={[required]}
            // warn={aol}
        />
        <button type="submit" className="submit" disabled={submitting}>Опубликовать</button>
    </form>
}

PublicationForm = reduxForm({ form: 'publication' })(PublicationForm)

function NewPublication(props) {
    let submit = async (formData) => {
        //props.loginThunk(formData.email, formData.password, formData.rememberMe)
        try {
            await axios.post('http://localhost:8001/register', { ...formData })
            props.history.goBack()
        } catch (e) { }
    }
    return (
        <div className="content-outer">
            <div id="page-content" className="row">

                <h3>Новая Публикация</h3>
                <PublicationForm onSubmit={submit}/>
                {/* <form name="contactForm" id="contactForm" method="post" action="">
                        <div className="cf">
                            <label for="cName">Имя <span className="required">*</span></label>
                            <input name="cName" type="text" id="cName" size="35" value="" />
                        </div>

                        <div className="cf">
                            <label for="cEmail">Email <span className="required">*</span></label>
                            <input name="cEmail" type="text" id="cEmail" size="35" value="" />
                        </div>

                        <div className="cf">
                            <label for="password">Пароль <span className="required">*</span></label>
                            <input name="password" type="password" id="password" size="35" value="" />
                        </div>

                        <button type="submit" className="submit">Зарегистрироваться</button>

                </form> */}
            </div>
        </div>
    );
}

export default withRouter(NewPublication);