import SideBar from '../SideBar/Sidebar';
import './Post.css';
import postImage from "../../images/post-image/post-image-1300x500-01.jpg"
import user1 from "../../images/user-01.png"
import user2 from "../../images/user-02.png"
import user3 from "../../images/user-03.png"
import author from "../../images/author-img.png"
import { useState } from 'react';

function Coments() {
    let [coments, setComents] = useState([
        {
            name: 'Надежда',
            coment: 'О какой собственности вы пишите? НЕТ собственности в России, есть только налоги, да и люди загнанные в ипотеку - якобы покупающие свою собственность.',
            date: '01.01.2021',
        },
        {
            name: 'Надежда',
            coment: 'О какой собственности вы пишите? НЕТ собственности в России, есть только налоги, да и люди загнанные в ипотеку - якобы покупающие свою собственность.',
            date: '01.01.2021',
        }, {
            name: 'Надежда',
            coment: 'О какой собственности вы пишите? НЕТ собственности в России, есть только налоги, да и люди загнанные в ипотеку - якобы покупающие свою собственность.',
            date: '01.01.2021',
        },
    ])
    return (
        <div id="comments">

            <h3>5 Comments</h3>

            <ol className="commentlist">

                <li className="depth-1">

                    <div className="avatar">
                        <img width="50" height="50" className="avatar" src={user1} alt="" />
                    </div>

                    <div className="comment-info">
                        <cite>Itachi Uchiha</cite>

                        <div className="comment-meta">
                            <time className="comment-time" datetime="2014-01-14T23:05">Jan 14, 2013 @ 23:05</time>
                            <span className="sep">/</span><a className="reply" href="#">Reply</a>
                        </div>
                    </div>

                    <div className="comment-text">
                        <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                      facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                    </div>

                </li>

                <li className="thread-alt depth-1">

                    <div className="avatar">
                        <img width="50" height="50" className="avatar" src={user3} alt="" />
                    </div>

                    <div className="comment-info">
                        <cite>John Doe</cite>

                        <div className="comment-meta">
                            <time className="comment-time" datetime="2014-01-14T24:05">Jan 14, 2013 @ 24:05</time>
                            <span className="sep">/</span><a className="reply" href="#">Reply</a>
                        </div>
                    </div>

                    <div className="comment-text">
                        <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                        urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                      tantas semper delicatissimi.</p>
                    </div>

                    <ul className="children">

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

                            <ul className="children">

                                <li className="depth-3">

                                    <div className="avatar">
                                        <img width="50" height="50" className="avatar" src={user3} alt="" />
                                    </div>

                                    <div className="comment-info">
                                        <cite>John Doe</cite>

                                        <div className="comment-meta">
                                            <time className="comment-time" datetime="2014-01-14T25:15">Jan 14, 2013 @ 25:15</time>
                                            <span className="sep">/</span><a className="reply" href="#">Reply</a>
                                        </div>
                                    </div>

                                    <div className="comment-text">
                                        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                  etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                    </div>

                                </li>

                            </ul>

                        </li>

                    </ul>

                </li>

                <li className="depth-1">

                    <div className="avatar">
                        <img width="50" height="50" className="avatar" src={user2} alt="" />
                    </div>

                    <div className="comment-info">
                        <cite>Hinata Hyuga</cite>

                        <div className="comment-meta">
                            <time className="comment-time" datetime="2014-01-14T25:15">Jan 14, 2013 @ 25:15</time>
                            <span className="sep">/</span><a className="reply" href="#">Reply</a>
                        </div>
                    </div>

                    <div className="comment-text">
                        <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                    </div>

                </li>

            </ol>
            <div className="respond">

                <h3>Leave a Comment</h3>

                <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>

                        <div className="cf">
                            <label for="cName">Name <span className="required">*</span></label>
                            <input name="cName" type="text" id="cName" size="35" value="" />
                        </div>

                        <div className="cf">
                            <label for="cEmail">Email <span className="required">*</span></label>
                            <input name="cEmail" type="text" id="cEmail" size="35" value="" />
                        </div>

                        <div className="cf">
                            <label for="cWebsite">Website</label>
                            <input name="cWebsite" type="text" id="cWebsite" size="35" value="" />
                        </div>

                        <div className="message cf">
                            <label for="cMessage">Message <span className="required">*</span></label>
                            <textarea name="cMessage" id="cMessage" rows="10" cols="50" ></textarea>
                        </div>

                        <button type="submit" className="submit">Submit</button>

                    </fieldset>
                </form>

            </div>
        </div>
    );
}

export default Coments