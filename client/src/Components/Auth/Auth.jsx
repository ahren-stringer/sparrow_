import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'
import { connect } from 'react-redux';

const input = ({ input, label, type, name, meta: { touched, error, warning } }) => {
    return (
        <div className="cf">
            <label for={name}>{label}<span className="required">*</span></label>
            <input {...input} name={name} type={type} id={name} size="35" />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
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
        <button className="submit" style={{
                marginLeft: '10px'
            }}>
            <NavLink to='/register' style={{
                color: 'white',
            }}>
                Зарегистрироваться
            </NavLink>
        </button>
    </form>
}

AuthForm = reduxForm({ form: 'auth' })(AuthForm)

function Auth(props) {
    let submit = async (formData) => {
        //props.loginThunk(formData.email, formData.password, formData.rememberMe)
        try {
            let req= await axios.post('http://localhost:8001/login', { ...formData })
            props.login(req.data.token, req.data.userId)
            debugger
            props.history.goBack()
        } catch (e) { }
    }
    return (
        <div className="content-outer">
            <div id="page-content" className="row">
                <h3>Авторизация</h3>
                <AuthForm onSubmit={submit} />
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {})(withRouter(Auth));