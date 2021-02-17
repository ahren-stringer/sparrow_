import { NavLink, withRouter } from "react-router-dom"
import './Profile.css'
import { logout } from '../../redux/authReduser';
import { useEffect, useState } from "react";
import { profileAPI } from "../../DAL/api";
import Preloader from "../Preloader/Preloader";
import ProfileIn from "./ProfileIn";

function Profile(props) {
debugger
   // let [user, setUser] = useState(props.user)

   // useEffect(async () => {
   //    let res = await profileAPI.getProfile(props.userId)
   //    props.setUser(res)
   //    let postsReq= await profileAPI.getPosts(props.userId)
   //    props.setPosts(postsReq)
   // }, [])
   // useEffect(() => {
   //    setUser(props.user)
   // }, [props.user])

   // let [file, setFile] = useState(null)
   // let [image, setImage] = useState(null)

   // let onChange = (e) => {
   //    setFile(e.target.files[0]);
   //    const reader = new FileReader();
   //    reader.onload = (e) => {
   //       console.log(e)
   //       setImage(e.target.result)
   //    }
   //    reader.readAsDataURL(e.target.files[0])
   // }

   // if (user === null) return <CircularProgress />
   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            {!props.userId ? <Preloader/>
             :<ProfileIn {...props}/>}
      </div>

      </div >
   );
}

export default Profile;
