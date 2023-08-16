import React, { Fragment, useEffect, useState  } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import More from "../More/index"
import Album from "../Album/index"
import Toplist from '../toplist';
import "./hot.css"

const navList = [
  //  eslint-disable-next-line jsx-a11y/img-redundant-alt
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

  // const images = [
  //   'https://p1.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg?param=140y140',
  //   'https://p2.music.126.net/jpGpwxor2KCsMsqFhROGNA==/109951168164727442.jpg?param=140y140',
  //   'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
  //   'https://p1.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg?param=140y140',
  //   'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
  //   'https://p2.music.126.net/jpGpwxor2KCsMsqFhROGNA==/109951168164727442.jpg?param=140y140',
  //   'https://p2.music.126.net/ni8sAmkzarFKVwGfIu7s3Q==/109951168753559612.jpg?param=140y140',
  //   'https://p2.music.126.net/BLMmLfUNu0zdprDISL_hTw==/109951165764406932.jpg?param=140y140',
  // ];




const Hot :React.FC =()=>{
  const [images, setImages] = useState<string[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);

   const getNewestAlbums = async () => {
    try {
      const response = await axios.get('https://netease-cloud-music-api-zeta-bice.vercel.app/top/playlist');
      const albums = response.data.playlists.slice(0, 8); // 只获取前八个元素
      console.log("热门推荐部分", albums);
  
      // 提取图片链接
      const images = albums.map((album: { coverImgUrl: string }) => album.coverImgUrl + '?param=140y140');
      setImages(images); // 更新状态
      setAlbums(albums);
    } catch (error) {
      console.error('请求出错:', error);
    }
  };
  
  useEffect(() => {
    getNewestAlbums();
  }, []); 

  const renderBoxes = () => {
    return images.map((image, index) => {
      const album = albums[index]; // 获取对应位置的播放列表信息
  
      return (
        <div key={index} className="box">
          <img src={image} alt={`Image ${index + 1}`} />
          <div className='bottom'>
            <Link to="#" title='播放' className='icon-play'></Link>
            <span className='icon-headset'></span>
            <span className='nb'>{album.commentCount}</span> 
          </div>
          <div className='dec'>
            <Link className='hover' to={'/playlist'} style={{color: "rgb(0, 0, 0)"}}>{album.name}</Link> 
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className='recommend-conent'>
        {/* 热门推荐导航栏部分 */}
        <div className='recommend-header'>
          <Link to="/discover/playlist" className="tit">热门推荐</Link>
          <div className='tab'>
            {
              navList.map((item) => (
                <Fragment key={item.id}>
                  <Link to={`${item.path}?cat=${item.name}`}>{item.name}</Link>
                  <span className='line'>|</span>
                </Fragment>
              ))
            }
          </div>
          <More />
        </div>

        {/* 热门推荐内容 */}
        <div className="box-container">{renderBoxes()}</div>

        <Album />
        <Toplist />
      </div>
    </Fragment>
    )
}

export default Hot;