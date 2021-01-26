import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
import './Blog.css'
import postTumb1 from "../../img/scale_1200.webp"
import postTumb2 from "../../images/post-image/post-image-1300x500-02.jpg"
import postTumb3 from "../../images/post-image/post-image-1300x500-03.jpg"
import SideBar from '../SideBar/Sidebar';
import react, { useState } from 'react';
import Pagination from './Pagination';
import { NavLink, withRouter } from 'react-router-dom';
import SinglePost from './SinglePost';
import SidebarContainer from '../SideBar/SidebarContainer';

function Blog(props) {
   debugger
   let [posts, setPosts] = useState()
   return (
      <>
         <PageTitle />

         <div className="content-outer">

            <div id="page-content" className="row">

               <div id="primary" className="eight columns">
               <img src={props.posts}></img>
                  {/* {props.posts.map(item => {
                     return <SinglePost item={item}
                     path={props.match.path}/>
                  })} */}
                  <Pagination />
               </div>
               <SidebarContainer />
            </div>
         </div>
      </>);
}

export default withRouter(Blog);