import React, { useEffect,Fragment } from 'react'
import { Link } from "react-router-dom";
import More from "../More/index"
import Album from "../Album/index"
import Toplist from '../toplist';
import "./hot.css"

const navList = [
    {
      name: '华语',
      path: '/discover/playlist/',
      id: Math.random()
    },
    {
      name: '流行',
      path: '/discover/playlist/',
      id: Math.random()
    },
    {
      name: '摇滚',
      path: '/discover/playlist/',
      id: Math.random()
    },
    {
      name: '民谣',
      path: '/discover/playlist/',
      id: Math.random()
    },
    {
      name: '电子',
      path: '/discover/playlist/',
      id: Math.random()
    },
  ]

  const images = [
    'https://p1.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg?param=140y140',
    'https://p2.music.126.net/jpGpwxor2KCsMsqFhROGNA==/109951168164727442.jpg?param=140y140',
    'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
    'https://p1.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg?param=140y140',
    'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
    'https://p2.music.126.net/jpGpwxor2KCsMsqFhROGNA==/109951168164727442.jpg?param=140y140',
    'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
    'https://p2.music.126.net/BLMmLfUNu0zdprDISL_hTw==/109951165764406932.jpg?param=140y140',
  ];

  const renderBoxes = () => {
    return images.map((image, index) => (
      <div key={index} className="box">
        <img src={image} alt={`Image ${index + 1}`} />
        <div className='bottom'>
          <Link to="#" title='播放' className='icon-play'></Link>
          <span className='icon-headset'></span>
          <span className='nb'>321万</span>
        </div>
        <div className='dec'>
          <Link className='hover' to={'/playlist'}>【万评电音】抬头，已是一片星海</Link>
        </div>
      </div>
    ));
  };


const Hot :React.FC =()=>{
    return(
        <Fragment> 
              <div className='recommend-conent'>
                {/* 热门推荐导航栏部分 */}
              <div className='recommend-header'>
                <Link to="/discover/playlist"  className="tit">热门推荐</Link>
                <div className='tab'>
                {
                navList.map((item) => {
                  return(
                    <><Link key={item.id} to={`${item.path}?cat=${item.name}`} >{item.name}</Link>
                    <span className='line'>|</span></>
                  )
                })
               }
              </div>
                   <More/>
              </div>

              {/* 热门推荐内容 */}
              <div className="box-container">{renderBoxes()}</div>;

               <Album/>
               <Toplist/>
            </div>

        </Fragment>
    )
}

export default Hot;