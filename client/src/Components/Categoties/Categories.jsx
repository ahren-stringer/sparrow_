import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
//import './Blog.css'
import SideBar from '../SideBar/SidebarContainer';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

class Categories extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         file: null,
         categories: null,
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onChange = this.onChange.bind(this);

   }
   onFormSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('myfile', this.state.file);
      formData.append('category', this.state.category)
      const config = {
         headers: {
            'content-type': 'multipart/form-data'
         }
      };
      axios.post("http://localhost:8001/category", formData, config)
         .then((response) => {
            alert("The file is successfully uploaded");
         }).catch((error) => {
         });
   }

   onChange(e) {
      debugger
      this.setState({ file: e.target.files[0] });
      console.log(e.target.files[0])
   }
   onInputChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }
   render() {
      return (
         <div className="content-outer">
            <div id="page-content" className="row">
               {!this.props.categories ? <Preloader/>
               :<div id="primary" className="twelve columns portfolio-list">
                  <h2 className="categories__title"> Категории </h2>
                  <div id="portfolio-wrapper" class="bgrid-halves cf">
                     {
                        this.props.categories.map(item => <div class="columns portfolio-item">
                           <div class="item-wrap">
                              <NavLink to={'/blog/' + item.category}>
                                 <div style={{
                                    backgroundImage: `url(http://localhost:8001/publication_image/${item.img.destination}${item.img.filename})`,
                                    height: "250px",
                                    backgroundSize: "cover",
                                    borderRadius: "3px",
                                 }}></div>
                                 {/* <img alt="" src={"http://localhost:8001/publication_image/" + item.img.destination +item.img.filename} /> */}
                                 <div class="overlay"></div>
                                 <div class="link-icon"><i class="fa fa-link"></i></div>
                              </NavLink>
                              <div class="portfolio-item-meta">
                                 <h5>
                                    <NavLink to={'/blog/' + item.category}>
                                       {item.category}
                                    </NavLink>
                                 </h5>
                                 {/* <p>Illustrration</p> */}
                              </div>
                           </div>
                        </div>)
                     }
                  </div>
               </div>}
            </div>
         </div>
      )
   }
}

export default Categories;