import '../Page/PageContent.css';
import './Blog.css'
import { NavLink } from 'react-router-dom';
import React from 'react';
import { imgURL } from '../../DAL/api';

function SinglePost(props) {
    return <>
        <div className="entry-header cf">
            <h1>
                <NavLink to={'/post/' + props.item.title}>
                    {props.item.title}
                </NavLink>
            </h1>
            <p className="post-meta">
                <span className="date" >{props.item.data.replace( /-/g, "." )
                                    .match(/[\d\.]+/)
                                    .join('')}</span>
                <span className="categories">
                    {props.item.categories[0].split(',').map(category => {
                        return <NavLink to={'/blog/'+category}>
                            / {category}
                        </NavLink>
                    })
                    }
                </span>
            </p>
        </div>
        <div className="post-thumb">
            <NavLink to={'/post/' + props.item.title}>
                <div
                    style={{
                        backgroundImage: `url(${imgURL(props.item.img.destination,props.item.img.filename)})`
                        //  backgroundImage: 'url('+props.item.img+')' 
                    }}
                    className='post-img'></div>
            </NavLink>
        </div>
        <div className="post-content" id="id">
            {props.path === '/blog/:category?' || props.path === '/search/:search'
                ? <p>{props.item.subtitle}</p>
                // ? <p>{props.item.content.split(' ').slice(0, 50).join(' ')}</p>
                : <div dangerouslySetInnerHTML={{ __html: props.item.content }} />
            }
        </div>
        </>
}

export default SinglePost;