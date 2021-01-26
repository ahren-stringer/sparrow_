import '../Page/PageContent.css';
import { useEffect, useState } from 'react';
import { setCategoriesSidebar } from '../../redux/categoryReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import SideBar from './Sidebar';

function SidebarContainer(props) {

    useEffect(async () => {
        let req = await axios.get(`http://localhost:8001/category/some`)
        props.setCategoriesSidebar(req.data)
    }, [])

    if (!props.categoriesSidebar) return <CircularProgress/>
    return <SideBar {...props} />
}

let mapStateToProps = (state) => {
    return {
        categoriesSidebar: state.categoryData.categoriesSidebar,
    }
}

export default connect(mapStateToProps, { setCategoriesSidebar })(SidebarContainer);