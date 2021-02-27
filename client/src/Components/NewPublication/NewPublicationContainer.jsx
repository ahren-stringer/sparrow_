import { withRouter } from "react-router-dom";
import {
    ChangeFontSizeThunk, bold, AddImageThunk,
    changeFontSize,
    setCopiedText,
    setCategory,
    onTextChange,
    MainImgThunk,
    PublicationThunk
} from '../../redux/publicationReduser'
import { connect } from 'react-redux';
import NewPublication from "./NewPublication";
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { setCategories } from '../../redux/categoryReduser'
import { publicationAPI } from "../../DAL/api";

function NewPublicationContainer(props) {

    useEffect(async () => {
        let req = await publicationAPI.getCategories()
        props.setCategories(req)
    }, [])

    if (props.userId === null) return <CircularProgress />
    return <NewPublication {...props} />
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        token: state.auth.token,
        categories: state.categoryData.categories,
        fontSize: state.publication.fontSize,
        copiedText: state.publication.copiedText,
        setedCategories: state.publication.setedCategories,
        fonts: state.publication.fonts,

        file: state.publication.file,
        image: state.publication.image,
        imageTitle: state.publication.imageTitle,
        title: state.publication.title,
        subtitle: state.publication.subtitle,
        content: state.publication.content,
        isUploaded:state.publication.isUploaded
    }
}

export default connect(mapStateToProps, {
    ChangeFontSizeThunk, bold, setCategories, AddImageThunk,
    changeFontSize,
    setCopiedText,
    setCategory,
    MainImgThunk,
    onTextChange,
    PublicationThunk
})(withRouter(NewPublicationContainer));