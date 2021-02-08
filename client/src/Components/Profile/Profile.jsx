import { NavLink, withRouter } from "react-router-dom"
import author from "../../images/author-img.png"
import './Profile.css'
import { logout } from '../../redux/authReduser';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from '@material-ui/core'

function Profile(props) {

   let [user, setUser] = useState(props.user)

   useEffect(async () => {
      let res = await axios.get(`http://localhost:8001/user/${props.userId}`)
      props.setUser(res.data)
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

   if (user === null) return <CircularProgress />
   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            <div id="primary" className="eight columns">

               <article className="post">

                  <div className="post-content">

                     <h3>Профиль</h3>
                     <div className="bio cf">

                        <div className="gravatar">
                           <img src={image || author} alt="" />
                        </div>

                        <div className="about">
                           <h5><a title="Posts by John Doe" href="#" rel="author">{user.name}</a></h5>
                           <p></p>
                        </div>

                     </div>

                     <input type="file" id="file" className="inputfile" name="file" onChange={onChange} />
                        <label for="file">Сменить аватар</label>

                     <div className='publications'>
                        <h3>Ваши Публикации</h3>
                        <div className="bio">
                           Пока нет публикаций
                        </div>
                     </div>
                     <h3 className='publication__add'>
                        <NavLink to='/publication'>
                           Добавить Публикацию
                        </NavLink>
                     </h3>
                     <h3 className='logout'
                        onClick={() => {
                           debugger
                           props.logout()
                           props.history.goBack()
                        }}
                     >
                        Выход
                     </h3>
                  </div>

               </article>

            </div>

         </div>

      </div>
   );
}

export default Profile;
