import Info from './Info';
import Intro from './Intro';
import './Home.css';
import Works from './Works';
import Jornal from './Jornal';
import CallToAction from './CallToAction';
import Tweets from './Tweets';

function Home() {
    return (<>
      <Intro/>
      <Info/>
      {/* <Works/> */}
      <Jornal/>
      <CallToAction/>
      {/* <Tweets/> */}
    </>);
}

export default Home;
