import './Profile.css'
import Preloader from "../Preloader/Preloader";
import ProfileIn from "./ProfileIn";

function Profile(props) {

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
