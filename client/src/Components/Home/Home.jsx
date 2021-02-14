import Info from './Info';
import Intro from './Intro';
import './Home.css';
import Works from './Works';
import Jornal from './Jornal';
import CallToAction from './CallToAction';
import Tweets from './Tweets';
import { useEffect } from 'react';
import { setCategories } from '../../redux/categoryReduser'
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { homeAPI } from '../../DAL/api';
import { setPosts } from '../../redux/blogReduser'

function Home(props) {

  useEffect(async () => {
    let cetegoryReq = await homeAPI.getCategories()
    props.setCategories(cetegoryReq)
    let postsReq = await homeAPI.getPosts()
    props.setPosts(postsReq)
}, [])

    return (<>
      {/* <Intro/> */}
      {/* <Info/> */}
      <Works {...props}/>
      <Jornal {...props}/>
      <CallToAction/>
      {/* <Tweets/> */}
    </>);
}

let mapStateToProps = (state) => {
   return {
    categories: state.categoryData.categories,
    posts: state.blog.posts
   }
}

export default connect(mapStateToProps, { setCategories,setPosts })(Home)
