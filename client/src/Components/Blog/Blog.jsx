import PageTitle from '../PageTitle/PageTitle';
import './Blog.css';

function Blog() {
    return (
        <>
            <PageTitle/>
            
<div className="content-outer">

   <div id="page-content" className="row">

      <div id="primary" className="eight columns">

         <article className="post">

            <div className="entry-header cf">

               <h1><a href="single.html" title="">Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin auctor.</a></h1>

               <p className="post-meta">

                  <time className="date" datetime="2014-01-14T11:24">Jan 14, 2014</time>
                  /
                  <span className="categories">
                  <a href="#">Design</a> /
                  <a href="#">User Inferface</a> /
                  <a href="#">Web Design</a>
                  </span>

               </p>

            </div>

            <div className="post-thumb">
               <a href="single.html" title=""><img src="images/post-image/post-image-1300x500-01.jpg" alt="post-image" title="post-image"/></a>
            </div>

            <div className="post-content">

               <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
               nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
               cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
               ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>

            </div>

         </article> 

         <article className="post">

            <div className="entry-header cf">

               <h1><a href="single.html" title="">Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin auctor.</a></h1>

               <p className="post-meta">

                  <time className="date" datetime="2014-01-14T11:24">Jan 14, 2013</time>
                  /
                  <span className="categories">
                  <a href="#">Design</a> /
                  <a href="#">User Inferface</a> /
                  <a href="#">Web Design</a>
                  </span>

               </p>

            </div>

            <div className="post-thumb">
               <a href="single.html" title=""><img src="images/post-image/post-image-1300x500-02.jpg" alt="post-image" title="post-image"/></a>
            </div>

            <div className="post-content">

               <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
               nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
               cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
               ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>

            </div>

         </article>

         <article className="post">

            <div className="entry-header cf">

               <h1><a href="single.html" title="">Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin auctor.</a></h1>

               <p className="post-meta">

                  <time className="date" datetime="2014-01-14T11:24">Jan 14, 2014</time>
                  /
                  <span className="categories">
                  <a href="#">Design</a> /
                  <a href="#">User Inferface</a> /
                  <a href="#">Web Design</a>
                  </span>

               </p>

            </div>

            <div className="post-thumb">
               <a href="single.html" title=""><img src="images/post-image/post-image-1300x500-03.jpg" alt="post-image" title="post-image"/></a>
            </div>

            <div className="post-content">

               <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
               nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
               cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
               ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>

            </div>

         </article> 

         <nav className="col full pagination">
                 <ul>
               <li><span className="page-numbers prev inactive">Prev</span></li>
                     <li><span className="page-numbers current">1</span></li>
                     <li><a href="#" className="page-numbers">2</a></li>
               <li><a href="#" className="page-numbers">3</a></li>
               <li><a href="#" className="page-numbers">4</a></li>
               <li><a href="#" className="page-numbers">5</a></li>
               <li><a href="#" className="page-numbers">6</a></li>
               <li><a href="#" className="page-numbers">7</a></li>
               <li><a href="#" className="page-numbers">8</a></li>
               <li><a href="#" className="page-numbers">9</a></li>
                     <li><a href="#" className="page-numbers next">Next</a></li>
                 </ul>
             </nav>

      </div>

      <div id="secondary" className="four columns end">

         <aside id="sidebar">

            <div className="widget widget_search">
               <h5>Search</h5>
               <form action="#">

                  <input className="text-search" type="text" onfocus="if (this.value == 'Search here...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Search here...'; }" value="Search here..."/>
                  <input type="submit" className="submit-search" value=""/>

               </form>
            </div>

            <div className="widget widget_text">
               <h5 className="widget-title">Text Widget</h5>
               <div className="textwidget">Proin gravida nibh vel velit auctor aliquet.
               Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
               nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
               a sit amet mauris. Morbi accumsan ipsum velit. </div>
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

            <div className="widget widget_tag_cloud">
               <h5 className="widget-title">Tags</h5>
               <div className="tagcloud cf">
                  <a href="#">drupal</a>
                  <a href="#">joomla</a>
                  <a href="#">ghost</a>
                  <a href="#">wordpress</a>
               </div>
            </div>

            <div className="widget widget_photostream">
               <h5>Photostream</h5>
               <ul className="photostream cf">
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
                  <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"/></a></li>
               </ul>
             </div>

         </aside>

      </div> 
   </div>

</div>
        </>);
}

export default Blog;