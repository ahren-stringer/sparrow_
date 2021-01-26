import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
//import './Blog.css'
import SideBar from '../SideBar/SidebarContainer';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
               <div id="primary" className="eight columns">
                  {
                     this.props.categories.map(item => <div class="columns portfolio-item first">
                        <div class="item-wrap">
                           <NavLink to={'/categories/' + item.category}>
                              <img alt="" src={item.img} />
                              <div class="overlay"></div>
                              <div class="link-icon"><i class="fa fa-link"></i></div>
                           </NavLink>
                           <div class="portfolio-item-meta">
                              <h5>
                                 <NavLink to={'/categories/' + item.category}>
                                    {item.category}
                                 </NavLink>
                              </h5>
                              {/* <p>Illustrration</p> */}
                           </div>
                        </div>
                     </div>)
                  }
               </div>
               <form onSubmit={this.onFormSubmit}>
                  <h1>Добавь категорию</h1>
                  <input name='category'
                     type='text'
                     id='publication-title'
                     size="35"
                     onChange={this.onInputChange}
                  />
                  <input type="file" className="custom-file-input" name="myImage" onChange={this.onChange} />
                  <button className="upload-button" type="submit">Upload to DB</button>
               </form>
            </div>
         </div>
      )
   }
}

export default Categories;

// function Categories(props) {
//    let [categories, setCategories]=useState(props.categories)

//    useEffect(async ()=>{
//       let req=await axios.get(`http://localhost:8001/category`)
//       props.setCategories(req.data)
//       console.log(req.data)
//       debugger
//    },[])

//    useEffect(()=>{
//       setCategories(props.categories)
//    },[props.categories])
//    return (
//       <>
//          <PageTitle />

//          <div className="content-outer">

//             <div id="page-content" className="row">

//                <div id="primary" className="eight columns">

//                   {categories.map(item=> <div>{item.category}</div>)}
//                </div>
//                <SideBar />
//             </div>
//          </div>
//       </>);
// }

// export default Categories;