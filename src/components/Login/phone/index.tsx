/**
 * 手机登录的公共组件
 */
import React, { useState, useContext, useEffect, useCallback, useMemo, MouseEvent, FormEvent } from 'react'
import { STATUS, ISetStateProps } from '../typing'

import "../styles/phone.css"
import { Link } from 'react-router-dom'



const Phone:React.FC=()=> {
 
  

  return (
    <div className='phone'>
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
              <Link to=''>密码登录</Link>
          </div>
      </div>
    </div>

  )
}

export default Phone
