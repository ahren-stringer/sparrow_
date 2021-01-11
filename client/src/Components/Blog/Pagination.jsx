import '../Page/PageContent.css';
import './Blog.css'
import { useState } from 'react';

function Pagination() {
    return (
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
    );
}

export default Pagination;