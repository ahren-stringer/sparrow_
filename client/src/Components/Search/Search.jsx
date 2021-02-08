import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
import './Blog.css'
import react, { useState } from 'react';
import Pagination from './Pagination';
import { NavLink, withRouter } from 'react-router-dom';
import SinglePost from './SinglePost';
import SidebarContainer from '../SideBar/SidebarContainer';
import { CircularProgress } from '@material-ui/core';

function Blog(props) {

   return (
      <>
         <PageTitle />

         <div className="content-outer">

            <div id="page-content" className="row">

               <div id="primary" className="eight columns">
                  {
                     !props.postsLoaded
                        ? <div>
                           {props.posts.map(item => {
                              return <SinglePost item={item}
                                 path={props.match.path} />
                           })}
                        </div>
                        : <CircularProgress />
                  }
                  <Pagination {...props} />
               </div>
               <SidebarContainer />
            </div>
         </div>
      </>);
}

export default withRouter(Blog);