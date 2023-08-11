import React, { useState,useEffect } from 'react';
import {LeftOutlined,RightOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";
import axios  from 'axios';
import "./banner.css"
import  { getBanner,cancelgetBanner }from '../../../api/banner';

type bannerInfo = {
  imgUrl: string,
  targetId: number,
  scm: string,
  targetType: number,
  url: string
}

function preload(imageUrl: string) {
  const img = new Image();
  img.src = imageUrl;
}


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [images, setImages] = useState([]);
  const [banners, setBanners] = useState<bannerInfo[]>([])

  function getbanner(){
    getBanner().then((res: any) => {
      try {
        const b = res.banners.map((item: any) =>
        ({
          imgUrl: item.imageUrl,
          targetId: item.targetId,
          scm: item.scm,
          targetType: item.targetType
        }))
  
        b.forEach((item: bannerInfo) => {
          preload(item.imgUrl)
        })
        setBanners(b)
    } catch (error) {
      console.error('获取图片列表失败:', error);
      return [];
      }
    })
  }
  
  const onNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // 当达到图片列表的末尾时，回到第一张图片
      if (nextIndex === images.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      // 当达到图片列表的开头时，回到最后一张图片
      if (nextIndex < 0) {
        return images.length - 1;
      }
      return nextIndex;
    });
  };
  useEffect(() => {
    getbanner()
    if (banners.length) {
    // 自动播放功能
    const autoplay = setInterval(() => {
      if (!isMouseOver) {
        onNextClick();
      }
    }, 3000);
  
    return () => {
      clearTimeout(autoplay);
    };
  }
  }, [isMouseOver]); // 当 isMouseOver 改变时重新执行

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }; // 仅在组件挂载时执行
  
  const handleDotClick = (index:any) => {
    setCurrentIndex(index);
  };

  return (
     <div className='carousel-box' style={{backgroundImage:`url(${images[currentIndex]}?imageView&blur=40x20)`,backgroundSize:'4000px'}}>
       <div className="carousel"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button onClick={onPrevClick} className="custom-prev-arrow" > <LeftOutlined/> </button>
    
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img key={index} src={image}  alt={`Image ${index + 1}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
        ))}

      {/* 底部小圆点 */}
      <ul className="dots">
        {images.map((image, index) => (
          <li
            key={index}
            className={`dot ${index === currentIndex ? 'back' : ''}`}
            onClick={() => handleDotClick(index) }
            style={{width:"6px",height:"6px"}} 
          ></li>
        ))}
      </ul>

        <div className="download">
          <Link to="/download" className="btn">下载客户端</Link>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <button onClick={onNextClick} className="custom-next-arrow" > <RightOutlined/></button>
      </div>
     </div>
  );
};

export default Carousel;