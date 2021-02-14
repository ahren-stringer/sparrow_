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
        let req= await chanelsAPI.getUsers()
        debugger
        props.setChanels(req)
     }, [])

   if (props.chanels===null) return <CircularProgress />
   return <Chanels {...props}/>  
}
let mapStateToPros = (state) => {
   return {
    chanels: state.chanels.chanels
   }
 }
export default connect(mapStateToPros, {setChanels})(withRouter(ChanelsContainer));