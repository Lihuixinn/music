/**
 * 手机登录的公共组件
 */
import React, { useState, useContext, useEffect, useCallback, useMemo, MouseEvent, FormEvent } from 'react'
import { STATUS, ISetStateProps } from '../typing'

import "../styles/phone.css"
import { Link } from 'react-router-dom'
import MainLogin from '../mainLogin'



const Phone:React.FC<any>=({onReturnClick})=> {
  const [showPasswordLogin, setShowPasswordLogin] = useState(true);
  // 点击事件处理函数
  const handleClick = () => {
    setShowPasswordLogin(false);
  };

  return (
    <div className='phone'>
      {showPasswordLogin ? ( 
      <div>
        <div className='input'>
          <div className='u-input'>
            <input type="text" placeholder='请输入手机号' />
            <div className='mobile'><em>+86</em></div>
            </div>
          </div>
        <div className='m-dxyz'>
          <input type="text" placeholder="请输入短信验证码" />
        </div>
        <div className='pcbtn f-fl'>
          <label htmlFor="">获取验证码</label>
        </div>

        <div className='power-btn'>
            <Link to="/">登录</Link>
        </div>
        <div className='pasLogin'>
        <Link to='' onClick={handleClick}>密码登录</Link>
      </div>
          
      </div>):(
        <section>
          <div className='password'>
            <div className='Yms'><em>+86</em></div>
            <input type="text" placeholder='请输入手机号'id='pasInput' />
            <div className='cWb'>
              <input type="password" placeholder='请输入密码'  />
              <Link to="/">忘记密码?</Link>
            </div>
            <div className='dx'>
              <Link to="/" id='dxLink' >短信登录</Link>
              <label htmlFor="">
              <input type="checkbox" id='checked'/>
              自动登录
              </label>
              
            </div>

            <div className='password-login-botton'>
              登录
            </div>
          </div>
        </section>
      )
      }
      
    
      {/* 密码登录 */}


      

       {/* 底部 */}
       <div className='phone-bottom'>
          <Link to='' id='phone-a' onClick={onReturnClick}>&lt;&nbsp;&nbsp;其他登录方式</Link>
        </div>
    </div>

  )
}

export default Phone
