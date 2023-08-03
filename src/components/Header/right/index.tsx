import React, { useState } from "react";
import "../styles/right.css"
import { Link } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons"
import Login from "../../Login";



const Right:React.FC=() => {

    const [showLogin, setShowLogin] = useState(false);

    const handleLoginButtonClick = () => {
      setShowLogin(true);
    };
  
    const handleCloseButtonClicked = () => {
      setShowLogin(false);
    };
    
        return(
            <div className="top-right">
                {/* 登录信息 */}
                <div className="login">
                  {
                   
                        <Link to='/' onClick={handleLoginButtonClick}>登录</Link>
                 
                  }
                  {
                    showLogin &&(
                        <Login onClose={handleCloseButtonClicked}/>
                    )
                  }
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