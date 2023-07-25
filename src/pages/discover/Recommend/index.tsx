import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./recommend.css"
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
  
const Recommend :React.FC =()=>{
    return(
        <Fragment>
           <div className='recommend-box'>
            <div className='recommend'>
              {/* 热门推荐部分 */}
              <div className='recommend-conent'>
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
              <span className='more'><Link to=''>更多</Link> <i className='cor'>&nbsp;</i></span>
              </div>
            </div>
            {/* 热门推荐内容 */}
            <ul className='recommend-item'>
               
            </ul>
            </div>
           </div>
        </Fragment>
    )
}

export default Recommend;