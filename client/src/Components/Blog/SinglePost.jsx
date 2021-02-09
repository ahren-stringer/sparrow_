import '../Page/PageContent.css';
import './Blog.css'
import { NavLink } from 'react-router-dom';
import React from 'react';

function SinglePost(props) {
    let postContent=React.createRef()
    debugger
    let addContent=()=>{
        // let postContent=document.getElementById("id");
        postContent.currrent.innerHTML=props.item.content
    }
    return <article className="post">
        <div className="entry-header cf">
            <h1>
                <NavLink to={'/post/' + props.item.title}>
                    {props.item.title}
                </NavLink>
            </h1>
            <p className="post-meta">
                <span className="date" >{props.item.data}</span>
                <span className="categories">
                    {props.item.categories[0].split(',').map(cateory => {
                        return <NavLink to='/category'>
                            / {cateory}
                        </NavLink>
                    })
                    }
                </span>
            </p>
        </div>
        <div className="post-thumb">
            <NavLink to={'/post/' + props.item.title}>
                <div 
                style={{ backgroundImage: 'url('+props.item.img+')' }}
                    className='post-img'></div>
            </NavLink>
        </div>
        <div className="post-content" id="id" ref={postContent}>
            {props.path === '/blog'
                ? <p>{props.item.content.split(' ').slice(0, 50).join(' ')}</p>
                :<div dangerouslySetInnerHTML={{ __html: props.item.content }} />         
            }
        </div>
    </article>
}

export default SinglePost;