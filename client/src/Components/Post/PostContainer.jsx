import './Post.css';
import { setPost } from '../../redux/postReduser';
import { withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

function PostContainer(props) {
   useEffect(async () => {
      let postName = props.match.params.postName;
      if (postName) {
         let req = await axios.get(`http://localhost:8001/posts/${postName}`)
         props.setPost(req.data)
      }
   }, [])
   if (!props.post) return <CircularProgress />
   return <Post {...props} />
}
let mapStateToPros = (state) => {
   return {
      post: state.post.post
   }
}
export default connect(mapStateToPros, { setPost })(withRouter(PostContainer));