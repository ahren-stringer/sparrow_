

function Chanels(props) {

   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            <div id="primary" className="eight columns">

               <article className="post">

                  <div className="post-content">

                     <h3>Каналы</h3>
                     {props.chanels.map(item=><div className="bio cf">

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

                  </div>)}

                  
                  </div>

               </article>

         </div>

      </div>

      </div >
   );
}

export default Chanels;
