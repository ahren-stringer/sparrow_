import './Post.css';
import Coments from './Coments';
import SinglePost from '../Blog/SinglePost';
import { CircularProgress } from '@material-ui/core';
import SidebarContainer from '../SideBar/SidebarContainer';
import Preloader from '../Preloader/Preloader';

function Post(props) {
debugger
   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            {!props.post ? <Preloader />
               : <>
                  <div id="primary" className="eight columns">
                     <article className="post">
                        <SinglePost item={props.post} />

                        <div className="bio cf">

                           <div className="gravatar" style={{
                              backgroundImage: `url(${imgURL(props.post.author.avatar.destination,props.post.author.avatar.filename)})`,
                              width: "100px",
                              height: "100px",
                              backgroundSize: "cover",
                              borderRadius: "100%",
                           }}>
                           </div>
                           <div className="about">
                              <h5><a title="Posts by John Doe" href="#" rel="author">{props.post.author.name}</a></h5>
                              <p>{props.post.author.description}</p>
                           </div>

                        </div>

                     </article>

                     {!props.coments ? <CircularProgress />
                        : <Coments {...props} />}

                  </div>

                  <SidebarContainer />
               </>}
         </div>

      </div>
   );
}

export default Post;