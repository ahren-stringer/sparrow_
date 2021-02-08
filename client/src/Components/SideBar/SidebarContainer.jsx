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

function SidebarContainer(props) {

    useEffect(async () => {
        let req = await axios.get(`http://localhost:8001/category/some`)
        props.setCategoriesSidebar(req.data)
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