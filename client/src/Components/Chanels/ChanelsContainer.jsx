import { withRouter } from "react-router-dom"
import { setChanels } from '../../redux/chanelsReduser';
import { connect } from "react-redux";
import { setUser, setPosts } from '../../redux/profileReduser';
import Chanels from "./Chanels";
import { useEffect } from "react";
import { chanelsAPI, profileAPI } from "../../DAL/api";
import Chanel from "./Chanel";

function ChanelsContainer(props) {

   useEffect(async () => {
      let chanel = props.match.params.chanel;
      let req;
      if (chanel) {
         req = await profileAPI.getProfile(chanel)
         let postsReq= await profileAPI.getPosts(chanel)
         props.setPosts(postsReq)
      }else{
         req = await chanelsAPI.getUsers()
      }
      props.setChanels(req)
   }, [])
 
   if (props.match.params.chanel){
      return <Chanel {...props} />
   }else{
      return <Chanels {...props} />
   }
}
let mapStateToPros = (state) => {
   return {
      chanels: state.chanels.chanels,
      posts: state.profile.posts
   }
}
export default connect(mapStateToPros, { setChanels,setPosts })(withRouter(ChanelsContainer));