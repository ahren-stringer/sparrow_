import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
import './Blog.css'
import Blog from './Blog';
import { useEffect } from 'react';
import { setPosts } from '../../redux/blogReduser'
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';

function BlogContainer(props) {
   useEffect(async () => {
      let req = await axios.get(`http://localhost:8001/posts`)
      props.setPosts(req.data)
      debugger
      console.log(req.data)
   }, [])
   if (!props.posts) return <CircularProgress />
   return <Blog {...props}/>
}

let mapStateToProps = (state) => {
   return {
      posts: state.blog.posts
   }
}

export default connect(mapStateToProps, { setPosts })(BlogContainer)