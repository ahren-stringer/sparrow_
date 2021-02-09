import { setAva } from '../../redux/authReduser'
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'
import { useState } from 'react';
import author from "../../images/author-img.png"
import { connect } from 'react-redux';
import { authAPI } from '../../DAL/api';
import './Form.css'

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


function RegisterForm(props) {
    const { submitting } = props

    let [file, setFile] = useState(null)
    let [image, setImage] = useState(null)

    let onChange = (e) => {
        props.setAva(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(e)
            setImage(e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return <form onSubmit={props.handleSubmit}>
        <div>
            <img src={image || author} alt="" className="profile__avatar" />
        </div>
        <input type="file" id="file" className="inputfile" name="file" onChange={onChange} />
        <label for="file">Добавить аватар</label>
        <Field
            name="name"
            type="text"
            component={input}
            label="Имя"
            validate={[required]}
            warn={aol}
        />
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
        <button type="submit" className="submit" disabled={submitting}>Зарегистрироваться</button>
    </form>
}

RegisterForm = reduxForm({ form: 'register' })(RegisterForm)

function Register(props) {
    let submit = async (formData) => {
        //props.loginThunk(formData.email, formData.password, formData.rememberMe)
        try {
            debugger
            await authAPI.register({ ...formData, file: props.file })
            props.history.goBack()
        } catch (e) { }
    }
    return (
        <div className="content-outer">
            <div id="page-content" className="row">

                <h3>Регистрация</h3>
                <RegisterForm onSubmit={submit} setAva={props.setAva}/>

            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
   return {
      file: state.auth.file
   }
}

export default connect(mapStateToProps, { setAva })(withRouter(Register))