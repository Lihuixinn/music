/**
 * 选择登录界面
 */
import React, { useState, useContext, MouseEvent, useCallback } from 'react'
import "../styles/main.css"
import Phone from "../phone"


  const MainLogin: React.FC<any> = ({ onSwitchLoginMode }) => {
    const [showPhone, setShowPhone] = useState(false);
    const handleClick = () => {
      setShowPhone(true);
    };
  
    const handleReturnClick = () => {
      setShowPhone(false);
    };
      if(showPhone){
        return<Phone onReturnClick={handleReturnClick}/>
      }

    const labelStyle: React.CSSProperties = { marginLeft: '2px' }
    const protocolStyle: React.CSSProperties = { color: '#507DAF' }

  return (
    <div className='login-main' >
      <div className='login-log'>
        <div className='login-left'>
          <div className='login-platform'></div>
          <div className='btn '>
            {
              !showPhone && (
              <span className='login-btn2 btn-img' onClick={handleClick}>手机号登录/注册</span>
              )
            }
          </div>
        </div>
        <div className='login-right'>
          <ul>
            <li>
              <a
                className='hover'
                href="https://music.163.com/api/sns/authorize?snsType=10&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                rel="noreferrer"
              >
                <i className="u-wx"></i>微信登录
              </a>
            </li>
            <li>
              <a
               
                className='hover'
                href="https://music.163.com/api/sns/authorize?snsType=5&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                rel="noreferrer"
              >
                <i className="u-qq"></i>QQ登录
              </a>
            </li>
            <li>
              <a
                
                className='hover'
                href="https://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true"
                target="_blank"
                rel="noreferrer"
              ><i className="u-sn"></i>微博登录
              </a>
            </li>
            <li>
              <span
                className='hover pointer' >
                <i className="u-wy"></i>
                网易邮箱帐号登录
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='login-official-protocol'>
        <input type="checkbox" id="j-official-terms"   />
        <label htmlFor="j-official-terms" style={labelStyle}>同意</label>
        <a className='hover' style={protocolStyle} href="http://st.music.163.com/official-terms/service" target="_blank" rel="noreferrer">《服务条款》</a>
        <a className='hover' style={protocolStyle} href="http://st.music.163.com/official-terms/privacy" target="_blank" rel="noreferrer">《隐私政策》</a>
        <a className='hover' style={protocolStyle} href="https://st.music.163.com/official-terms/children" target="_blank" rel="noreferrer">《儿童隐私政策》</a>
      </div>
      <div className='login-scan pointer'onClick={onSwitchLoginMode} ></div>
    </div>
  )
}

export default MainLogin;

