import '../Page/PageContent.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { imgURL } from '../../DAL/api';

class Categories extends React.Component {

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
                                    backgroundImage: `url(${imgURL(item.img.destination,item.img.filename)})`,
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