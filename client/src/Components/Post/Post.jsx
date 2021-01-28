import SideBar from '../SideBar/Sidebar';
import './Post.css';
import postImage from "../../images/post-image/post-image-1300x500-01.jpg"
import author from "../../images/author-img.png"
import Coments from './Coments';
import { useState } from 'react';
import postTumb1 from "../../img/scale_1200.webp"
import SinglePost from '../Blog/SinglePost';

function Post(props) {
   let [post, setPost] = useState([{
      title: 'Принудительное изъятие единственного жилья – новый закон',
      data: '01.01.2020',
      categories: ['реновация', 'жилье', 'законы'],
      img: postTumb1,
      text: 'С 2021 года в России произошли существенные изменения по вопросу права собственности граждан. Теперь собственника квартиры или дома, проживающего в центральной части любого города страны – при наличии определённых обстоятельств, могут попросить собрать вещички и переехать в новую квартиру равной пощади, которую местный орган власти предоставит взамен изымаемой или получить компенсацию взамен изымаемой квартиры в доме, который уходит под снос.Классно, – скажете Вы, — новая квартира взамен ветхого жилья! Да, действительно речь идет о переселении граждан из квартир, расположенных в неновых домах в центре города в квартиры в новостройках на окраинах.Мы говорим о принятом в самом конце 2020 года законе № 494-ФЗ, который еще прозвали законом о всероссийской реновации. И если в самом начале обсуждения реновации речь шла о том, что граждан, проживающих в центральных частях городов в старых, ветхих непригодных для проживания домах будут переселять в новостройки, то в окончательной редакции закона получилось так, что теперь можно заставить переехать на окраину города любого собственника квартиры, которая расположена в доме, находящемся в центре города. Даже если этот дом не ветхий, а просто требует дорогостоящего капитального ремонта. Невероятно! Давайте посмотрим – как такое стало возможно.',
      authorName: 'Юридическая консультация',
      authorDesctription: 'Новый пост от Юридической консультации',
      coments: [],
   }])

   return (
      <div className="content-outer">

         <div id="page-content" className="row">

            <div id="primary" className="eight columns">
               <SinglePost item={props.post[0]} />
               <Coments />
            </div>

            {/* <SideBar /> */}

         </div>

      </div>
   );
}

export default Post;