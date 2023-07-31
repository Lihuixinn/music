import React, { useState }  from "react";
import "../styles/bottom-nav.css"
import { NavLink } from "react-router-dom";
import { log } from "console";
// import styled from 'styled-components';



const Right:React.FC=()=>{
  const [redNav,setRedNav] =useState( [
    {
      name: '推荐',
      path: '/discover',
      isClick:true,
    },
    {
      name: '排行榜',
      path: '',
      isClick:false,
    },
    {
      name: '歌单',
      path: '', 
      isClick:false,
    },
    {
      name: '主播电台',
      path: '',
      isClick:false,
    },
    {
      name: '歌手',
      path: '',
      isClick:false,
    },
    {
      name: '新碟上架',
      path: '',
      isClick:false,
    }
  ])

    const handleClick=(index:number)=>{
      const updatedNav = redNav.map((item, i) => ({  
        ...item,
        isClick: i === index
      }));

      setRedNav(updatedNav);
    };


        return(
           <div className='rednav'>
                <div className='red-conent'>
                <ul className="red">
                  {
                    redNav.map((redNav,index)=>{
                        return <li key={index} className="redList" >
                            <NavLink to="/" className="redlink" onClick={()=>handleClick(index)} style={{backgroundColor:redNav.isClick?"#9B0909":'#c20c0c'}}> {redNav.name}</NavLink >
                        </li>
                    })
                  }
               </ul>
          </div>
       </div>
             
        )
}

export default Right;