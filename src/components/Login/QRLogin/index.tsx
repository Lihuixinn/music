/**
 * 二维码登录
 */

import React, {  Fragment,createContext, useCallback, useMemo, useRef, useState } from 'react'
import "../styles/qr.css"

// 5个状态，对应主界面、二维码登录、(手机验证码登录、手机密码登录)、网易邮箱登录、注册
enum STATUS {
  MAIN = 'main',
  QR = 'qr',
  PHONE = 'phone',
  EMAIL = 'email',
  ENROLL = 'enroll'
}
// 等待和成功状态
enum AWAIT {
  PENDING,
  FULLFILLED
}
const QRLogin: React.FC = ()=>{
  // canvas
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // 是否显示刷新器
  const [refresh, setRefresh] = useState(false)

  const refreshClick = useCallback(() => {
    setRefresh(false)
  }, [])
  // 切换界面
  const mainClick = useCallback(() => {
    setStateCallback(STATUS.MAIN)
    setRefresh(false)
  }, [setStateCallback])

  const refreshStyles = useMemo(() => ({
    display: refresh ? 'block' : 'none'
  }), [refresh])
  
    return (
    <div className='qr'>
      <div className='qr_main'>
        <div className='qr_phone'></div>
        <div className='right'>
          <div className='title'>扫码登录</div>
          <div className='qr_code'>
            <div className='qr_code_content'>
              <canvas  width={130} height={130}></canvas>
              <div className='refresh' style={refreshStyles}>
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
      <div className='otherbtn'>
          <div className='other pointer' onClick={mainClick}>选择其他登录模式</div>
      </div>
 
    </div>
    )

    
     

}
export default QRLogin
function setStateCallback(MAIN: any) {
  throw new Error('Function not implemented.')
}

