//import './Blog.css';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'
import {setPhotoThunk} from '../../redux/publicationReduser'
import { connect } from 'react-redux';

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
const photoInput = ({ input, label, type, name, meta: { touched, error, warning }, setPhotoThunk }) => {
    const setPhoto=(e)=>{
        if (e.target.files.length) setPhotoThunk(e.target.files[0])
    };
    return (
        <div className="cf">
            <label for={name}>{label}</label>
            <input {...input} name={name} type={type} id={name} size="35" onChange={setPhoto} className='submit'/>
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
            name="photo"
            type="file"
            component={photoInput}
            label="Заглавное изображение"
            //validate={[required]}
            warn={aol}
            setPhotoThunk={props.setPhotoThunk}
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

function NP(props) {

    // const setPhoto=(e)=>{
    //     if (e.target.files.length) props.setPhotoThunk(e.target.files[0])
    // };

    let submit = async (formData) => {
        //props.loginThunk(formData.email, formData.password, formData.rememberMe)
        try {
            await axios.post('http://localhost:8001/register', { ...formData })
            //props.history.goBack()
        } catch (e) { }
    }
    return (
        <div className="content-outer">
            <div id="page-content" className="row">

                <h3>Новая Публикация</h3>
                <PublicationForm onSubmit={submit} setPhotoThunk={props.setPhotoThunk}/>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
    
    }
}

export default connect(mapStateToProps,{setPhotoThunk})(withRouter(NP));