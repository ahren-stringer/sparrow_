import author from "../../images/author-img.png"

function Profile() {
  return (
    <div className="content-outer">

    <div id="page-content" className="row">

       <div id="primary" className="eight columns">

          <article className="post">

             <div className="post-content">

             <h3>Профиль</h3>
                <div className="bio cf">

                   <div className="gravatar">
                      <img src={author} alt=""/>
                   </div>
                   <div className="about">
                      <h5><a title="Posts by John Doe" href="#" rel="author">John Doe</a></h5>
                      <p>Jon Doe is lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                      cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                      <a href="#">cursus</a> a sit <a href="#">amet mauris</a>. Morbi elit consequat ipsum.</p>
                   </div>

                </div>

               <h3>Ваши Публикации</h3>
               <h3>
                   Добавить Публикацию
               </h3>

             </div>

          </article> 

       </div>

    </div>

 </div> 
  );
}

export default Profile;
