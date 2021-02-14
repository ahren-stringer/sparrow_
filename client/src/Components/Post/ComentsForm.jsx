import './Post.css';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form'
import { NavLink, withRouter } from "react-router-dom";
import { required, aol, email, minLength6 } from '../../validators'
import { connect } from 'react-redux';
import { comentsAPI } from '../../DAL/api';

const input = ({ input, label, name, meta: { touched, error, warning } }) => {
    return (
        <div className="message cf">
            {/* <label for={name}>{label}<span className="required">*</span></label> */}
            <textarea {...input} name={name} id="cMessage" rows="10" cols="50" ></textarea>
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>

        // <div className="cf">
        //     <label for={name}>{label}<span className="required">*</span></label>
        //     <input {...input} name={name} type={type} id={name} size="35" />
        //     {touched &&
        //         ((error && <span>{error}</span>) ||
        //             (warning && <span>{warning}</span>))}
        // </div>
    )
}

function ComentsReduxForm(props) {
    const { submitting } = props

    return <form onSubmit={props.handleSubmit}>
        <Field
            name="coment"
            component={input}
            // label="Email"
            validate={[required]}
            warn={aol}
        />
        <button type="submit" className="submit" disabled={submitting}>Отправить</button>
    </form>
}

ComentsReduxForm = reduxForm({ form: 'coment' })(ComentsReduxForm)

function ComentsForm(props) {
    let submit = async (formData) => {
        try {
            debugger
            let req = await comentsAPI.sendComent({ ...formData }, props.post._id, props.userId)
        } catch (e) { }
    }
    return (
        <div className="respond">
            <div id="page-content" className="row">
                <h3>Оставте отзыв</h3>
                <ComentsReduxForm onSubmit={submit} />
            </div>
        </div>
    );
}

// function ComentsForm() {

//     return (
//         <div className="respond">

//             <h3>Leave a Comment</h3>

//             <form name="contactForm" id="contactForm" method="post" action="">
//                 <fieldset>

//                     <div className="message cf">
//                         <label for="cMessage">Message <span className="required">*</span></label>
//                         <textarea name="cMessage" id="cMessage" rows="10" cols="50" ></textarea>
//                     </div>

//                     <button type="submit" className="submit">Submit</button>

//                 </fieldset>
//             </form>

//         </div>
//     );
// }

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {})(ComentsForm);