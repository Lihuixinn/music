/*
 * 二维码登录
 */

import React, {  useCallback, useEffect, useMemo, useRef, useState } from 'react'
import "../styles/qr.css"
import axios from 'axios';

const QRLogin: React.FC<any> = ({ onSwitchLoginMode })=>{
  const [qrCode,setQrCode] = useState<string>('')
  useEffect(() => {
    // 在组件加载时获取二维码
    const fetchQrCode = async () => {
      try {
        const response = await axios.get('/login/qr/key'); // 发送获取二维码的请求
        setQrCode(response.data.qrCode); // 将获取到的二维码保存至状态中
      } catch (error) {
        console.error('Failed to fetch QR code', error);
      }
    };

    fetchQrCode();
  }, []);

  // 是否显示刷新器
  const [refresh, setRefresh] = useState(false)

  const refreshClick = useCallback(() => {
    setRefresh(false)
  }, [])

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
                <button onClick={refreshClick}>点击刷新</button>
              </div>
            </div>
          </div>
          <p className="txt">
            使用&nbsp;<a className="download-link hover" href="https://music.163.com/#/download" target="_blank" rel="noreferrer">网易云音乐APP</a>&nbsp;扫码登录
          </p>
        </div>
      </div>
      <div className='otherbtn'>
          <div className='other pointer' onClick={onSwitchLoginMode}>选择其他登录模式</div>
      </div>
 
    </div>
    )   

}
export default QRLogin

