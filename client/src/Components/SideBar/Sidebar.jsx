import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBar(props) {
   debugger
   let [searched, setSearched] = useState(props.searched);

   let searchInput = React.createRef();

   useEffect(() => {
      if (searched.requestNumber < props.searched.requestNumber || props.searched.requestNumber === 0)
         setSearched(props.searched)
   }, [props.searched])

   return (
      <div id="secondary" className="four columns end">

         <aside id="sidebar">


            <div className="widget widget_search">
               <h5>Поиск</h5>
               <form action="#" className='searching-form'>

                  <input className="text-search" type="text" value={props.newSearchText}
                     onChange={() => { props.searchThunk(searchInput.current.value, props.requestNumber) }}
                     ref={searchInput}
                     name="s"
                     placeholder="Искать здесь..." />
                  {
                     props.newSearchText !== ''
                        ? <NavLink to={"/search/" + props.newSearchText} onClick={() => {
                           props.CloseListThunk()
                           props.SearchChange('')
                        }}>
                           <input type="submit" className="submit-search" value="" />
                        </NavLink>
                        : <input type="submit" disabled='true' className="submit-search" value="" />
                  }
                  {props.isListLoading ? <div className='preloader'>
                     <CircularProgress />
                  </div>
                     :
                     <ul className="collection">
                        {
                           (props.isClosed && !searched.request) ? null :
                              searched.request.map((item) => {

                                 return <li className="collection-item">
                                    <NavLink to={`/post/${item.title}`}
                                       //className="collection-item"
                                       onClick={() => {
                                          props.SearchChange('')
                                          props.CloseListThunk()
                                       }}>
                                       {item.title}
                                    </NavLink>
                                 </li>
                              })
                        }
                        {
                           (!searched.request || searched.request.length === 0) ? null :
                              <li className="collection-item">
                                 <NavLink to={"/search/" + props.newSearchText} onClick={() => {
                                    props.CloseListThunk()
                                    props.SearchChange('')
                                 }}>
                                    Все результаты
                                </NavLink>
                              </li>
                        }
                     </ul>
                  }
               </form>
            </div>
            {!props.categoriesSidebar ? <CircularProgress />
               : <>
                  <div className="widget widget_categories">
                     <h5 className="widget-title">
                        <NavLink to='/categories'>
                           Категории
                  </NavLink>
                     </h5>
                     <ul className="link-list cf">
                        {props.categoriesSidebar.map(item => <li>
                           <NavLink to={`/blog/${item.category}`}>
                              {item.category}
                           </NavLink>
                        </li>)}
                     </ul>
                  </div>
               </>}
         </aside>

      </div>

   );
}

export default SideBar;