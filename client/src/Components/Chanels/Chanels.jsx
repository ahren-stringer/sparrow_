import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function Chanels(props) {

   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            {!props.chanels ? <Preloader />
               :<div id="primary" className="eight columns">

               <article className="post">

                  <div className="post-content">

                     <h3>Каналы</h3>
                     {props.chanels.map(item=><NavLink to={`/chanels/${item.name}`}>
                     <div className="bio cf" style={{cursor:'pointer'}}>

                        <div className="gravatar" style={{
                           backgroundImage: `url(http://localhost:8001/publication_image/${item.avatar.destination}${item.avatar.filename})`,
                           width: "100px",
                           height: "100px",
                           backgroundSize: "cover",
                           borderRadius: "100%",
                        }}>                        
                     </div>

                     <div className="about">
                        <h5><a title="Posts by John Doe" href="#" rel="author">{item.name}</a></h5>
                        <p>{item.description}</p>
                     </div>

                  </div>
                  </NavLink>)}

                  
                  </div>

               </article>

         </div>}

      </div>

      </div >
   );
}

export default Chanels;
