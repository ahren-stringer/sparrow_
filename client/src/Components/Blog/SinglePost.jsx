import '../Page/PageContent.css';
import './Blog.css'
import { NavLink } from 'react-router-dom';

function SinglePost(props) {
    debugger
    return <article className="post">
        <div className="entry-header cf">

            <h1>
                <NavLink to={'/post/' + props.item.title}>
                    {props.item.title}
                </NavLink>
            </h1>
            <p className="post-meta">
                <time className="date" datetime="2014-01-14T11:24">{props.item.data}</time>
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
        <div className="post-content">
            {props.path === '/blog'
                ? <p>{props.item.text.split(' ').slice(0, 50).join(' ')}</p>
                : <p>{props.item.text}</p>
            }
        </div>
    </article>
}

export default SinglePost;