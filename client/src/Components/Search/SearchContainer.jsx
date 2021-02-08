import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
import './Search.css'
import { useEffect } from 'react';
import { setSearchedPage, SetTotalCount, SetPageCount, setLoaded } from '../../redux/searchReduser'
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { SearchAPI } from '../../DAL/api';
import { withRouter } from 'react-router-dom'
import Blog from '../Blog/Blog'

function SearchContainer(props) {
   useEffect(async () => {
      let search = props.match.params.search;
      debugger
      if (search) {
         let req = await SearchAPI.getSearchPage(search, props.onOnePage, props.numberOfPage - 1)
         debugger
         props.setSearchedPage(req.posts)
         props.SetTotalCount(req.totalCount)
      }
   }, [])

   let onPageChange = async (onOnePage, numberOfPage) => {
      props.setLoaded(false)
      let search = props.match.params.search;
      if (!search) {
         let req = await SearchAPI.getSearchPage(search, onOnePage, numberOfPage)
         props.setSearchedPage(req.posts)
         props.SetTotalCount(req.totalCount)
      }
      props.setLoaded(true)
   };

   if (!props.posts) return <CircularProgress />
   return <Blog {...props} onPageChange={onPageChange} />
}

let mapStateToProps = (state) => {
   return {
      totalCount: state.search.totalCount,
      numberOfPage: state.search.numberOfPage,
      onOnePage: state.search.onOnePage,
      postsLoaded: state.search.postsLoaded,
      posts: state.search.searchedPage,
   }
}

export default connect(mapStateToProps, {SetTotalCount, SetPageCount, setLoaded, setSearchedPage })(withRouter(SearchContainer))