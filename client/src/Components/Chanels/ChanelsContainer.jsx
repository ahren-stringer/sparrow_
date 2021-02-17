import { withRouter } from "react-router-dom"
import { setChanels } from '../../redux/chanelsReduser';
import { connect } from "react-redux";
import { CircularProgress } from '@material-ui/core'
import Chanels from "./Chanels";
import { useEffect } from "react";
import { chanelsAPI } from "../../DAL/api";

function ChanelsContainer(props) {
   debugger
   useEffect(async () => {
      let chanel = props.match.params.chanel;
      let req;
      if (chanel) {
         req = await chanelsAPI.getUsers()
      }else{
         req = await chanelsAPI.getUsers()
      }
      props.setChanels(req)
   }, [])

   if (props.chanels===null) return <CircularProgress />
   return <Chanels {...props} />
}
let mapStateToPros = (state) => {
   return {
      chanels: state.chanels.chanels
   }
}
export default connect(mapStateToPros, { setChanels })(withRouter(ChanelsContainer));