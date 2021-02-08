import '../Page/PageContent.css';
import './Blog.css'
import { useState } from 'react';

function Pagination(props) {
    let pageCount = Math.ceil(props.totalCount / props.onOnePage);
    //Math.ceil(props.totalCount / props.onOnePage);
    let arr = [];
    for (let i = 1; i <= pageCount; i++) {
        arr.push(i)
    }
    return (
        <nav className="col full pagination">
            <ul>
                {/* <li><span className="page-numbers prev inactive">Prev</span></li> */}
                <li
                    onClick={() => {
                        if (props.numberOfPage !== arr[0]) {
                            props.SetPageCount(props.numberOfPage - 1)
                            props.onPageChange(props.onOnePage, props.numberOfPage - 2)
                        }
                    }}><span className={props.numberOfPage == arr[0] ? "page-numbers prev inactive" : 'page-numbers prev'}>Prev</span></li>
                {
                    arr.map((item, index) => <li
                        onClick={(e) => {
                            props.SetPageCount(item)
                            props.onPageChange(props.onOnePage, index)
                        }}>
                        {item === props.numberOfPage
                            ? <span className="page-numbers current">{item}</span>
                            : <a className="page-numbers">{item}</a>}
                    </li>)
                }
                <li
                    onClick={() => {
                        if (props.numberOfPage !== arr[arr.length - 1]){
                            props.SetPageCount(props.numberOfPage + 1)
                            props.onPageChange(props.onOnePage, props.numberOfPage)
                        }                       
                    }}><a className={props.numberOfPage == arr[arr.length - 1] ? "page-numbers next inactive" : 'page-numbers next'}>Next</a></li>
                {/* <li><a href="#" className="page-numbers next">Next</a></li> */}
            </ul>
        </nav>
    );
}

export default Pagination;