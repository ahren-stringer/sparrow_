import './SideBar.css';

function SideBar() {
  return (
<div id="secondary" className="four columns end">

         <aside id="sidebar">

            <div className="widget widget_search">
               <h5>Search</h5>
               <form action="#">

                  <input className="text-search" type="text" onfocus="if (this.value == 'Search here...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Search here...'; }" value="Search here..."/>
                  <input type="submit" className="submit-search" value=""/>

               </form>
            </div>

            <div className="widget widget_categories">
               <h5 className="widget-title">Categories</h5>
               <ul className="link-list cf">
                  <li><a href="#">Designs</a></li>
                  <li><a href="#">Internet</a></li>
                  <li><a href="#">Typography</a></li>
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Other Stuff</a></li>
               </ul>
            </div>
         </aside>

      </div> 

);
}

export default SideBar;