import { withRouter } from "react-router-dom";
import {
    ChangeFontSizeThunk, DecorateTextThunk, AddImageThunk,
    setFontSize,
    setCopiedText,
    setCategory,

    MainImgThunk
} from '../../redux/publicationReduser'
import { connect } from 'react-redux';
import NewPublication from "./NewPublication";
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { setCategories } from '../../redux/categoryReduser'
import { publicationAPI } from "../../DAL/api";

function NewPublicationContainer(props) {
    let [sc, setSc] = useState(props.setedCategories)
    useEffect(async () => {
        let req = await publicationAPI.getCategories()
        props.setCategories(req)
    }, [])

    if (props.userId === null) return <CircularProgress />
    return <NewPublication {...props} sc={sc} />
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

        file:state.publication.file,
        image:state.publication.image,
        imageTitle: state.publication.imageTitle
    }
}

export default connect(mapStateToProps, {
    ChangeFontSizeThunk, DecorateTextThunk, setCategories, AddImageThunk,
    setFontSize,
    setCopiedText,
    setCategory,
    MainImgThunk
})(withRouter(NewPublicationContainer));