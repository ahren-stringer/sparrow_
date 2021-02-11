import './Post.css';
import Coments from './Coments';
import SinglePost from '../Blog/SinglePost';
import { CircularProgress } from '@material-ui/core';
import SidebarContainer from '../SideBar/SidebarContainer';

function Post(props) {

   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            <div id="primary" className="eight columns">
               <SinglePost item={props.post} />

               {/* <p class="tags">
  			            <span>Tagged in </span>:
  				         <a href="#">orci</a>, <a href="#">lectus</a>, <a href="#">varius</a>, <a href="#">turpis</a>
  			         </p>

                  <div class="bio cf">

                     <div class="gravatar">
                        <img src="images/author-img.png" alt=""/>
                     </div>
                     <div class="about">
                        <h5><a title="Posts by John Doe" href="#" rel="author">John Doe</a></h5>
                        <p>Jon Doe is lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                        cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                        <a href="#">cursus</a> a sit <a href="#">amet mauris</a>. Morbi elit consequat ipsum.</p>
                     </div>

                  </div>

                  <ul class="post-nav cf">
  			            <li class="prev"><a rel="prev" href="#"><strong>Previous Article</strong> Duis Sed Odio Sit Amet Nibh Vulputate</a></li>
  				         <li class="next"><a rel="next" href="#"><strong>Next Article</strong> Morbi Elit Consequat Ipsum</a></li>
  			         </ul> */}

               {!props.coments ? <CircularProgress/>
               :<Coments {...props}/>}
               
            </div>

            <SidebarContainer />

         </div>

      </div>
   );
}

export default Post;