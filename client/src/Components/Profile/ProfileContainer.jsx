import { NavLink, withRouter } from "react-router-dom"
import './Profile.css'
import { logout } from '../../redux/authReduser';
import { setUser } from '../../redux/profileReduser';
import { connect } from "react-redux";
import { CircularProgress } from '@material-ui/core'
import Profile from "./Profile";

function ProfileContainer(props) {
   debugger
   if (props.userId===null) return <CircularProgress />
   return <Profile {...props}/>  
}
let mapStateToPros = (state) => {
   return {
      userId: state.auth.userId,
      user: state.profile.user,
   }
 }
export default connect(mapStateToPros, {logout,setUser})(withRouter(ProfileContainer));