import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'

const input = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <div className="cf">
            <label for={name}>{label}<span className="required">*</span></label>
            <input {...input} name={name} type={type} id={name} size="35" />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
        // <div className="row">
        //     <div className="input-field col s12">
        //         <input {...input} id={type} type={type} className="validate" />
        //         <label for={type}>{label}</label>
        //         {touched &&
        //             ((error && <span>{error}</span>) ||
        //                 (warning && <span>{warning}</span>))}
        //     </div>
        // </div>
    )
}

function AuthForm(props) {
    const { submitting } = props

    return <form onSubmit={props.handleSubmit}>
        <Field
            name="email"
            type="email"
            component={input}
            label="Email"
            validate={[required, email]}
            warn={aol}
        />

        <Field
            name="password"
            type="password"
            component={input}
            label="Пароль"
            validate={[required, minLength6]}
            warn={aol}
        />
        <button type="submit" className="submit" disabled={submitting}>Войти</button>
    </form>
}

AuthForm = reduxForm({ form: 'auth' })(AuthForm)

function Auth(props) {
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
                <h3>Авторизация</h3>
                <AuthForm onSubmit={submit}/>
            </div>
        </div>
    );
}

export default withRouter(Auth);