import { withRouter } from "react-router-dom";
import { ChangeFontSizeThunk,DecorateTextThunk,getSelectedText,AddImageThunk,
    setFontedId,
    setFontSize,
    setCopiedText,
    setUnderlinedId,
    setCategory } from '../../redux/publicationReduser'
import { connect } from 'react-redux';
import NewPublication from "./NewPublication";
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { setCategories } from '../../redux/categoryReduser'
import axios from "axios";
import { publicationAPI } from "../../DAL/api";

function NewPublicationContainer(props) { 
    let [sc,setSc]=useState(props.setedCategories)
    useEffect(async () => {
        debugger
        let req = await publicationAPI.getCategories()
        props.setCategories(req)
    }, []) 
     
    if (props.userId===null) return <CircularProgress />
   return <NewPublication {...props} sc={sc}/>  
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        categories: state.categoryData.categories,
        fontedId:state.publication.fontedId,
        fontSize:state.publication.fontSize,
        copiedText:state.publication.copiedText,
        underlinedId:state.publication.underlinedId,
        setedCategories:state.publication.setedCategories
    }
}

export default connect(mapStateToProps, { ChangeFontSizeThunk,DecorateTextThunk,getSelectedText,setCategories,AddImageThunk,
    setFontedId,
    setFontSize,
    setCopiedText,
    setUnderlinedId,
    setCategory })(withRouter(NewPublicationContainer));