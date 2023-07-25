import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // 定义图片列表，可根据需要修改
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];

  const onNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex === images.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
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
  };

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={onPrevClick}>上一张</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
      <button onClick={onNextClick}>下一张</button>
    </div>
  );
};

export default Carousel;