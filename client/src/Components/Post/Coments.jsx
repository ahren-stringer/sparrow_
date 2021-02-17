import SideBar from '../SideBar/Sidebar';
import './Post.css';
import user3 from "../../images/user-03.png"
import { useState } from 'react';
import ComentsForm from './ComentsForm';

function Coments(props) {
    debugger
    return (
        <div id="comments">

            <h3>{props.totalCount} Comments</h3>

            <ol className="commentlist">

                {props.coments.map(item => <li className="thread-alt depth-1">

                    <div className="avatar">
                    <div className="avatar" style={{
                           backgroundImage: `url(http://localhost:8001/publication_image/${item.author.avatar.destination}${item.author.avatar.filename})`,
                           width: "75px",
                           height: "75px",
                           backgroundSize: "cover",
                           borderRadius: "100%",
                        }}>
                     </div>
                        {/* <img width="50" height="50" className="avatar" src={user3} alt="" /> */}
                    </div>

                    <div className="comment-info">
                        <cite>{item.author.name}</cite>

                        <div className="comment-meta">
                            <time className="comment-time" datetime="2014-01-14T24:05">
                                {item.date.replace(/-/g, ".")
                                    .match(/[\d\.]+/)
                                    .join('')}
                            </time>
                            <span className="sep">/</span><a className="reply" href="#">Reply</a>
                        </div>
                    </div>

                    <div className="comment-text">
                        <p>{item.coment}</p>
                    </div>

                    {/* <ul className="children">

                        <li className="depth-2">

                            <div className="avatar">
                                <img width="50" height="50" className="avatar" src={user3} alt="" />
                            </div>

                            <div className="comment-info">
                                <cite>Kakashi Hatake</cite>

                                <div className="comment-meta">
                                    <time className="comment-time" datetime="2014-01-14T25:05">Jan 14, 2013 @ 25:05</time>
                                    <span className="sep">/</span><a className="reply" href="#">Reply</a>
                                </div>
                            </div>

                            <div className="comment-text">
                                <p>Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                            cursus a sit amet mauris</p>
                            </div>

                        </li>

                    </ul> */}

                </li>)}

            </ol>
            {!props.token ? <div>Авторизуйтесь, чтобы оставить коментарий</div>
                :<ComentsForm post={props.post} />}
        </div>
    );
}

export default Coments