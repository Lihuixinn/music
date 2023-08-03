/**
 * 首页发现
 */
import React from 'react'
import Carousel from './Banner/index'

import Recommend from './Recommend/index'



const Discover:React.FC = () => {

  return (
    <div>

        <Carousel/>
        <Recommend/>
      
    </div>
  )
}

export default Discover;