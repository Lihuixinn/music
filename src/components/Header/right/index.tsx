import React, {  } from "react";
import "../styles/right.css"
import { Link } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons"

const Right:React.FC=()=>{
        return(
            <div className="top-right">
                {/* 登录信息 */}
                <div className="login">
                    <Link to='/login'>登录</Link>
                </div>
                 {/* 创作者中心 */}
                 <div className="author">
                    <Link to="/">创作者中心</Link>
                </div>

                {/* 搜索框 */}
                <div className="srch">
                    <div className="top-search">
                    <span className='top-search-bg top'>
                            {/* <input type="text" /> */}
                            <SearchOutlined  className="icn"/>
                            <label htmlFor="" className="ph">音乐/视频/电台/用户</label>    
                    </span>
                    </div>
                </div>

               
            
                
            </div>
        )
}

export default Right;