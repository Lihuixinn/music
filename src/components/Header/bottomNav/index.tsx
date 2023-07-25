import React, {  } from "react";
import "../styles/bottom-nav.css"
import { NavLink } from "react-router-dom";
// import {SearchOutlined} from "@ant-design/icons"
const redNav:{name:string,path:string} [] = [
    {
      name: '推荐',
      path: '/discover',
    },
    {
      name: '排行榜',
      path: '',
    },
    {
      name: '歌单',
      path: '', 
    },
    {
      name: '主播电台',
      path: '',
    },
    {
      name: '歌手',
      path: '',
    },
    {
      name: '新碟上架',
      path: '',
    }
  ]


const Right:React.FC=()=>{
        return(
           <div className='rednav'>
                <div className='red-conent'>
                <ul className="red">
                  {
                    redNav.map((redNav)=>{
                        return <li key={redNav.name} className="redList">
                            <NavLink to="/" className="redlink">{redNav.name}</NavLink>
                        </li>
                    })
                  }
               </ul>
          </div>
       </div>
             
        )
}

export default Right;