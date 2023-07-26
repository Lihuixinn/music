/**
 * 首页发现
 */
import React from 'react'
import Carousel from './Banner/index'
import Recommend from './Recommend/index'


const Discover:React.FC = () => {

  return (
    <div>
        {/* <CarouselComponent images={images} interval={5000}/> */}
        <Carousel/>
        <Recommend/>
        
    </div>
  )
}

export default Discover;