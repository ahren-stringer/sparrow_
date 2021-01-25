import { withRouter } from "react-router-dom";
import { setPhotoThunk } from '../../redux/publicationReduser'
import { connect } from 'react-redux';
import NewPublication from "./NewPublication";
import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { setCategories } from '../../redux/categoryReduser'
import axios from "axios";

function NewPublicationContainer(props) { 
    useEffect(async () => {
        let req = await axios.get(`http://localhost:8001/category`)
        props.setCategories(req.data)
    }, [])  
    if (props.userId===null) return <CircularProgress />
   return <NewPublication {...props}/>  
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        categories: state.categoryData.categories,
    }
}

export default connect(mapStateToProps, { setPhotoThunk,setCategories })(withRouter(NewPublicationContainer));