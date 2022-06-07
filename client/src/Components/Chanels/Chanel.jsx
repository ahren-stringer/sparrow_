import { NavLink } from "react-router-dom"
import { imgURL } from "../../DAL/api";
import Preloader from "../Preloader/Preloader";

function Chanel(props) {

    //    if (user === null) return <Preloader/>
    return (
        <div className="content-outer">

            <div id="page-content" className="row">
                {!props.chanels ? <Preloader/>
                    :<div id="primary" className="eight columns">

                    <article className="post">

                        <div className="post-content">

                            <div className="bio cf">

                                <div className="gravatar" style={{
                                    backgroundImage: `url(${  user.avatar ? imgURL(user.avatar.destination,user.avatar.filename):""  })`,
                                    width: "100px",
                                    height: "100px",
                                    backgroundSize: "cover",
                                    borderRadius: "100%",
                                }}>
                                    {/* <img src={image || `http://localhost:8001/publication_image/${user.avatar.destination}${user.avatar.filename}`} alt="" /> */}
                                </div>

                                <div className="about">
                                    <h5><a title="Posts by John Doe" href="#" rel="author">{props.chanels.name}</a></h5>
                                    <p></p>
                                </div>

                            </div>

                            {/* <input type="file" id="file" className="inputfile" name="file" onChange={onChange} />
                  <label for="file">Сменить аватар</label> */}

                            <div className='publications'>
                                <div className="bio">
                                    {!props.posts
                                        ? <span>Пока нет публикаций</span>
                                        : props.posts.map(item => <article className="row entry">

                                            <div className="entry-header">

                                                <div className="ten columns entry-title pull-right">
                                                    <h3><NavLink to={'/post/' + item.title}>{item.title}</NavLink></h3>
                                                </div>

                                                <div className="two columns post-meta end">
                                                    <p>
                                                        <time datetime="2014-01-31" className="post-date" pubdate="">{item.data.replace(/-/g, ".")
                                                            .match(/[\d\.]+/)
                                                            .join('')}</time>
                                                        <span className="dauthor">{item.author.name}</span>
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="ten columns offset-2 post-content">
                                                <p>{item.subtitle}
                                                    {/* <a className="more-link" href="single.html">Read More<i className="fa fa-arrow-circle-o-right"></i></a> */}
                                                </p>
                                            </div>

                                        </article>)}
                                </div>
                            </div>
                        </div>

                    </article>
                </div>}
            </div>
        </div>
    );
}

export default Chanel;
