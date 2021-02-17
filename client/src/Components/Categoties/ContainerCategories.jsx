import '../Page/PageContent.css';
import Categories from './Categories';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import { categoriesAPI } from '../../DAL/api';
import Blog from '../Blog/Blog';
import "./Categories.css"
function ContainerCategories(props) {

    useEffect(async () => {
        let req = await categoriesAPI.getCategories()
        props.setCategories(req)
    }, [])

    // if (!props.categories) return <CircularProgress/>
    return <Categories {...props} />
}

let mapStateToProps = (state) => {
    return {
        categories: state.categoryData.categories,
    }
}

export default connect(mapStateToProps, { setCategories })(ContainerCategories);