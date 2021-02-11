import '../Page/PageContent.css';
import { useEffect, useState } from 'react';
import { setCategoriesSidebar } from '../../redux/categoryReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import SideBar from './Sidebar';
import {
    setSearched, toggleList, loadList, setReqNumber, setSearchedArr, SearchChange,
    searchThunk,
    CloseListThunk
  } from '../../redux/searchReduser';
import { categoriesAPI } from '../../DAL/api';

function SidebarContainer(props) {

    useEffect(async () => {
        let req = await categoriesAPI.getSomeCategories()
        props.setCategoriesSidebar(req)
    }, [])

    if (!props.categoriesSidebar) return <CircularProgress />
    return <SideBar {...props} />
}

let mapStateToProps = (state) => {
    return {
        categoriesSidebar: state.categoryData.categoriesSidebar,
        newSearchText: state.search.newSearchText,
        searched: state.search.searched,
        isClosed: state.search.isClosed,
        isListLoading: state.search.isListLoading,
        requestNumber: state.search.requestNumber,
    }
}

export default connect(mapStateToProps, { setCategoriesSidebar,
    setSearched, toggleList, loadList, setReqNumber, setSearchedArr, SearchChange,
    searchThunk,
    CloseListThunk })(SidebarContainer);