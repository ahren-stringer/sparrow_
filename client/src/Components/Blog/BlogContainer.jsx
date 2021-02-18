import '../Page/PageContent.css';
import './Blog.css'
import Blog from './Blog';
import { useEffect } from 'react';
import { setPosts, SetTotalCount, SetPageCount, setLoaded } from '../../redux/blogReduser'
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { blogAPI } from '../../DAL/api';
import { withRouter } from 'react-router-dom'

function BlogContainer(props) {

   useEffect(async () => {
      let category = props.match.params.category;
      let req = [];
      if (!category) {
         req = await blogAPI.setPosts(props.onOnePage, props.numberOfPage - 1)
      } else {
         req = await blogAPI.setCategoryPosts(category, props.onOnePage, props.numberOfPage - 1)
      }
      props.setPosts(req.posts)
      props.SetTotalCount(req.totalCount)
   }, [])
   useEffect(async()=>{
      let category = props.match.params.category;
      let req = [];
      if (!category) {
         req = await blogAPI.setPosts(props.onOnePage, props.numberOfPage - 1)
      } else {
         req = await blogAPI.setCategoryPosts(category, props.onOnePage, props.numberOfPage - 1)
      }
      props.setPosts(req.posts)
      props.SetTotalCount(req.totalCount)
   },[props.match.params.category])

   let onPageChange = async (onOnePage, numberOfPage) => {
      props.setLoaded(false)
      let category = props.match.params.category;
      let req = [];
      if (!category) {
         req = await blogAPI.setPosts(onOnePage, numberOfPage)
      } else {
         req = await blogAPI.setCategoryPosts(category, onOnePage, numberOfPage)
      }
      props.setPosts(req.posts)
      props.SetTotalCount(req.totalCount)
      props.setLoaded(true)
   };

   return <Blog {...props} onPageChange={onPageChange} />
}

let mapStateToProps = (state) => {
   return {
      posts: state.blog.posts,
      totalCount: state.blog.totalCount,
      numberOfPage: state.blog.numberOfPage,
      onOnePage: state.blog.onOnePage,
      postsLoaded: state.blog.postsLoaded
   }
}

export default connect(mapStateToProps, { setPosts, SetTotalCount, SetPageCount, setLoaded })(withRouter(BlogContainer))