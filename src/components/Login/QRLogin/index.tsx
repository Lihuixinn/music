/**
 * 二维码登录
 */
import Context from '@ant-design/icons/lib/components/Context'
import React, { useState, useEffect, useRef, useCallback, useMemo, useContext, Fragment,createContext } from 'react'
import "../styles/qr.css"

const QRLogin: React.FC = ()=>{
    return (
        <Fragment>
      <div className='qr_main'>
        <div className='qr_phone'></div>
        <div className='right'>
          <div className='title'>扫码登录</div>
          <div className='qr_code'>
            <div className='qr_code_content'>
              <canvas  width={130} height={130}></canvas>
              <div className='refresh' >
                <p>二维码已失效</p>
                <button >点击刷新</button>
              </div>
            </div>
          </div>
          <p className="txt">
            使用&nbsp;<a className="download-link hover" href="https://music.163.com/#/download" target="_blank" rel="noreferrer">网易云音乐APP</a>&nbsp;扫码登录
          </p>
        </div>
      </div>
    </Fragment>
    )

}
export default QRLogin
