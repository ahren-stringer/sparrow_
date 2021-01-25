import '../Page/PageContent.css';
import Categories from './Categories';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';

function ContainerCategories(props) {

    useEffect(async () => {
        let req = await axios.get(`http://localhost:8001/category`)
        props.setCategories(req.data)
    }, [])

    if (!props.categories) return <CircularProgress/>
    return <Categories {...props} />
}

let mapStateToProps = (state) => {
    return {
        categories: state.categoryData.categories,
    }
}

export default connect(mapStateToProps, { setCategories })(ContainerCategories);