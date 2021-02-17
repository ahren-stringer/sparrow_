import { NavLink, withRouter } from "react-router-dom"
import './Profile.css'
import { logout } from '../../redux/authReduser';
import { setUser, setPosts } from '../../redux/profileReduser';
import { connect } from "react-redux";
import { CircularProgress } from '@material-ui/core'
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";

function ProfileContainer(props) {
   debugger
   // if (props.userId === null) return <Preloader />
      debugger
   return  <Profile {...props} />
}
let mapStateToPros = (state) => {
   return {
      userId: state.auth.userId,
      user: state.profile.user,
      posts: state.profile.posts
   }
}
export default connect(mapStateToPros, { logout, setUser, setPosts })(withRouter(ProfileContainer));