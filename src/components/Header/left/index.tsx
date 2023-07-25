/* eslint-disable jsx-a11y/heading-has-content */
import React,{} from 'react'
import {Link} from "react-router-dom"
import "../styles/left.css"
// import {Link,NavLink } from "react-router-dom"

interface nav{
    name:string,
    link:string,
  }
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const nav: nav[] = [
    {
      name: '发现音乐',
      link: '',
    },
    {
      name: '我的音乐',
      link: '',
    },
    {
      name: '朋友',
      link: '', 
    },
    {
      name: '商城',
      link: 'https://music.163.com/store/product',
    },
    {
      name: '音乐人',
      link: 'https://music.163.com/st/musician',
    },
    {
      name: '下载客户端',
      link: '',
    }
  ]

const Left:React.FC=()=>{
    return (
      <div >
          <div className="top-left">
             <div className='wrap'>
              <h1 className='logo'>
                <a href="/" target='_blank' rel='noreferrer'>网易云音乐</a>
              </h1>
              <ul className='top-nv'>
                  {
                    nav.map((nav)=>{
                        return <li key={nav.name} className='list'>
                            <span className='nav-name'>
                              <Link to="/index"target='_blank' rel='noreferrer'>
                              {nav.name}</Link>
                              </span>
                        </li>
                    })
                  }
              </ul>
              </div>
          </div>
      </div>
    )
}

export default  Left;
