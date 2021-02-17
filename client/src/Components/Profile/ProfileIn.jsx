import { NavLink, withRouter } from "react-router-dom"
import './Profile.css'
import { logout } from '../../redux/authReduser';
import { useEffect, useState } from "react";
import { profileAPI } from "../../DAL/api";
import Preloader from "../Preloader/Preloader";

function ProfileIn(props) {

   let [user, setUser] = useState(props.user)

   useEffect(async () => {
      let res = await profileAPI.getProfile(props.userId)
      props.setUser(res)
      let postsReq= await profileAPI.getPosts(props.userId)
      props.setPosts(postsReq)
   }, [])
   useEffect(() => {
      setUser(props.user)
   }, [props.user])

   let [file, setFile] = useState(null)
   let [image, setImage] = useState(null)

   let onChange = (e) => {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
         console.log(e)
         setImage(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
   }

   if (user === null) return <Preloader/>
   return (
      <div id="primary" className="eight columns">

               <article className="post">

                  <div className="post-content">

                     <h3>Профиль</h3>
                     <div className="bio cf">

                        <div className="gravatar" style={{
                           backgroundImage: `url(http://localhost:8001/publication_image/${user.avatar.destination}${user.avatar.filename})`,
                           width: "100px",
                           height: "100px",
                           backgroundSize: "cover",
                           borderRadius: "100%",
                        }}>
                           {/* <img src={image || `http://localhost:8001/publication_image/${user.avatar.destination}${user.avatar.filename}`} alt="" /> */}
                     </div>

                     <div className="about">
                        <h5><a title="Posts by John Doe" href="#" rel="author">{user.name}</a></h5>
                        <p></p>
                     </div>

                  </div>

                  {/* <input type="file" id="file" className="inputfile" name="file" onChange={onChange} />
                  <label for="file">Сменить аватар</label> */}

                  <div className='publications'>
                     <h3>Ваши Публикации</h3>
                     <div className="bio">
                        {!props.posts 
                        ?<span>Пока нет публикаций</span>
                     : props.posts.map(item => <article className="row entry">

                     <div className="entry-header">
             
                       <div className="ten columns entry-title pull-right">
                         <h3><NavLink to={'/post/' + item.title}>{item.title}</NavLink></h3>
                       </div>
             
                       <div className="two columns post-meta end">
                         <p>
                           <time datetime="2014-01-31" className="post-date" pubdate="">{item.data.replace( /-/g, "." )
                                                 .match(/[\d\.]+/)
                                                 .join('')}</time>
                           <span className="dauthor">{item.author.name}</span>
                         </p>
                       </div>
             
                     </div>
             
                     <div className="ten columns offset-2 post-content">
                       <p>{item.subtitle}
                  {/* <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a> */}
                  </p>
                     </div>
             
                   </article>) }
                        </div>
                  </div>
                  <h3 className='publication__add'>
                     <NavLink to='/publication'>
                        Добавить Публикацию
                        </NavLink>
                  </h3>
                  <button className='logout'>
                  <h3 style={{margin:'0',
                  color:'#fff'}}
                     onClick={() => {
                        debugger
                        props.logout()
                        props.history.goBack()
                     }}
                  >
                     Выход
                     </h3>
                  </button>
                  </div>

               </article>

         </div>

   );
}

export default ProfileIn;
