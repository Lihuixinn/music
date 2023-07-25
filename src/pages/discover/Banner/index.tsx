import React, { useState,useEffect } from 'react';
import {LeftOutlined,RightOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";
import "./banner.css"
import { url } from 'inspector';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  

  // 定义图片列表，可以根据你的需求进行修改
  const  images = [
    'https://p1.music.126.net/NfXNU740LaMSCUzm-9ZPGg==/109951168762124227.jpg',
    'https://p1.music.126.net/HXLlQuPytu5YJWZ50mdMRQ==/109951168754711754.jpg',
    'https://p1.music.126.net/IJ83mwGaDBosJAwwhl7J4w==/109951168762093705.jpg',
    'https://p1.music.126.net/KKbwZu3sblPP9CHAM5Bdtg==/109951168762131988.jpg',
    "https://p1.music.126.net/P1nUxk1uOAL3PsHaYoFE0w==/109951168762103145.jpg",
    "https://p1.music.126.net/kEQkFAIoPToQCBjG1v2gmA==/109951168762101997.jpg",
  ];
  

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
    // 自动播放功能
    const autoplay = setInterval(() => {
      if (!isMouseOver) {
        onNextClick();

      }
    }, 3000);

    return () => {
      clearTimeout(autoplay);
    };
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
          // onClick={() => handleDotClick(index)}
        />
        ))}

      {/* 底部小圆点 */}
      <ul className="dots">
        {images.map((image, index) => (
          <li
            key={index}
            className={`dot ${index === currentIndex ? 'back' : ''}`}
            onClick={() => handleDotClick(index) }
            style={{width:"8px",height:"8px"}} 
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