import React, { Fragment } from "react";
import {Link} from "react-router-dom"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import More from "../More/index"
import "./album.css"

type Album = {
    id: number;
    name: string;
    cover: string;
  };

const Album:React.FC = ()=>{
    const albums: Album[] = [
        {
          id: 1,
          name: 'Album 1',
          cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
        },
        {
          id: 2,
          name: 'Album 2',
          cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
        },
        {
            id: 3,
            name: 'Album 3',
            cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
          },
          {
            id: 4,
            name: 'Album 4',
            cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
          },
          {
            id: 5,
            name: 'Album 4',
            cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
          },
          {
            id: 6,
            name: 'Album 4',
            cover: 'https://p4.music.126.net/xpwUbmJpoH7FhxviMzkSuA==/109951168745649812.jpg?param=100y100',
          },
       
        // 其他专辑数据
      ];

      const settings = {
        dots: false, // 设置dots为false，去掉轮播点
        infinite: true,
        speed: 500,
        slidesToShow: 5, // 每次显示4张图片
        slidesToScroll: 3, // 每次滚动1张图片,
        prevArrow: <div className="prev-arrow" />,
        nextArrow: <div className="next-arrow" />,
        responsive: [
          {
            breakpoint: 768, // 在响应式断点下设置显示数量为2
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
    
     
    return (
        <Fragment>
            {/* 导航栏部分 */}
            <div className="n-new">
                <Link to="/discover/album" className="tit">新碟上架</Link>
                <More/>
            </div>
            {/* 内容部分 */}
            <div className="n-disk">
              <div className="inner">
                
              <Slider {...settings}>
                {albums.map(album => (
                <div key={album.id} className="album-item">
                    <img src={album.cover} alt={album.name} />
                    <p>{album.name}</p>
                </div>
                ))}
            </Slider>
              </div>  
            </div>
        </Fragment>
    )
}

export default Album;