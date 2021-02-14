import './Post.css';
import '../Blog/Blog.css'
import { setPost,setComents,SetTotalCount } from '../../redux/postReduser';
import { withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { blogAPI, comentsAPI } from '../../DAL/api';

function PostContainer(props) {
   useEffect(async () => {
      let postName = props.match.params.postName;
      if (postName) {
         let postReq = await blogAPI.getSinglePost(postName)
         props.setPost(postReq)
         let comentsReq= await comentsAPI.getComents(postReq._id,10,0);
         debugger
         props.setComents(comentsReq.coments)
         props.SetTotalCount(comentsReq.totalCount)
      }
   }, [])
   if (!props.post) return <CircularProgress />
   return <Post {...props} />
}
let mapStateToPros = (state) => {
   return {
      post: state.post.post,
      coments: state.post.coments,
      totalCount: state.post.totalCount
   }
}
export default connect(mapStateToPros, { setPost,setComents,SetTotalCount })(withRouter(PostContainer));