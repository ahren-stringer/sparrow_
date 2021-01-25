import '../Page/PageContent.css';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import SideBar from './Sidebar';

function SidebarContainer(props) {

    useEffect(async () => {
        let req = await axios.get(`http://localhost:8001/category/some`)
        props.setCategories(req.data)
    }, [])

    if (!props.categories) return <CircularProgress/>
    return <SideBar {...props} />
}

let mapStateToProps = (state) => {
    return {
        categories: state.categoryData.categories,
    }
}

export default connect(mapStateToProps, { setCategories })(SidebarContainer);