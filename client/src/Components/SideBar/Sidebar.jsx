import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBar(props) {
   return (
      <div id="secondary" className="four columns end">

         <aside id="sidebar">

            <div className="widget widget_search">
               <h5>Search</h5>
               <form action="#">

                  <input className="text-search" type="text" onfocus="if (this.value == 'Search here...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Search here...'; }" value="Search here..." />
                  <input type="submit" className="submit-search" value="" />

               </form>
            </div>

            <div className="widget widget_categories">
               <h5 className="widget-title">
                  <NavLink to='/categories'>
                     Categories
                  </NavLink>
               </h5>
               <ul className="link-list cf">
                  {props.categories.map(item => <li>
                     <NavLink to={`/categories/${item.category}`}>
                        {item.category}
                     </NavLink>
                  </li>)}
               </ul>
            </div>
         </aside>

      </div>

   );
}

export default SideBar;