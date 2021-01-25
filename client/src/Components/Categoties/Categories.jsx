import PageTitle from '../Page/PageTitle';
import '../Page/PageContent.css';
//import './Blog.css'
import SideBar from '../SideBar/SidebarContainer';
import { useEffect, useState } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import axios from 'axios';

function Categories(props) {
   let [categories, setCategories]=useState(props.categories)

   useEffect(async ()=>{
      let req=await axios.get(`http://localhost:8001/category`)
      props.setCategories(req.data)
      console.log(req.data)
      debugger
   },[])

   useEffect(()=>{
      setCategories(props.categories)
   },[props.categories])
   return (
      <>
         <PageTitle />

         <div className="content-outer">

            <div id="page-content" className="row">

               <div id="primary" className="eight columns">
               
                  {categories.map(item=> <div>{item.category}</div>)}
               </div>
               <SideBar />
            </div>
         </div>
      </>);
}

export default Categories;