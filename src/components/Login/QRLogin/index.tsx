/*
 * 二维码登录
 */

import React, {  Fragment, useCallback,  useEffect, useMemo, useRef, useState } from 'react'
import "../styles/qr.css"
import { AWAIT,  STATUS } from '../typing';
// import Context from 'react-redux/es/components/Context';
import {  checkQRCodeStatus, createQRCode, createQRkey, } from '../../../api/qrCode';

interface IProps {
  stateCode: STATUS
}

const QRLogin: React.FC<any> = ({ onSwitchLoginMode }: { onSwitchLoginMode: () => void }, props: IProps)=>{
  const rootRef = useRef<HTMLDivElement>(null)
  // 是否显示刷新器
  const [refresh, setRefresh] = useState(false)
  const [refreshButtonClicked, setRefreshButtonClicked] = useState<boolean>(false);
  // 是否显示已扫码
  const [timestamp, setTimestamp] = useState(Date.now());
  const [state, setState] = useState(AWAIT.PENDING)
// 显示二维码
  const [qrCodeKey, setQRCodeKey] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');

  // 获取二维码key和图片
  async function getQRCode() {
    try {

      const response1 = await createQRkey();
      console.log("二维码展示函数",response1)
      const uniKey = response1.data.unikey;
      if (response1 && response1.data) {
        setQRCodeKey(response1.data.unikey);
      } else {
        console.error('Invalid response');
      }
      if (refreshButtonClicked === false) {
        checkLoginStatus(uniKey);
      }
      fetchData(uniKey);
    } catch (error) {
      console.error('获取二维码失败:', error);
    }
  }

  const fetchData = async (uniKey: string) => {
    try {
        const response2 = await createQRCode(uniKey);
        console.log("二维码图片获取函数",response2);
        const qrCodeURL = response2.data.qrimg;
        setQRCodeURL(qrCodeURL)
        console.log('打印二维码URL:', qrCodeURL); // 打印二维码URL
      } catch (error) {
        console.error(error);
      }
    };

 // 开始轮询
const checkLoginStatus = useCallback(async (uniKey: string) => {
  try {
    const currentTimestamp = Date.now(); // 获取当前时间戳
    const response:any = await checkQRCodeStatus(uniKey);
    console.log(uniKey)
    console.log("response响应了吗",response)

    console.log("response.code:",response.code)
    if (!response) return;
    console.log("时间戳再者")
    console.log(currentTimestamp)
    console.log(timestamp)
    if (currentTimestamp - timestamp >= 60000) {
      setRefresh(true);
      uniKey = "";
    } else if (response.code === 801) {
      console.log("response==801",response.message)
      // 等待扫码中...
      setRefresh(true);
    } else if (response.code === 802) {
      setState(AWAIT.FULLFILLED)
      console.log("respnese==802",response.message)
    } else if (response.code === 803) {
      uniKey = "";
      console.log("respnese==803",response.message)
      setRefresh(false);
      // 重新加载页面
      window.location.reload()
      window.scrollTo(0, 0)
    }
  } catch (error) {
    console.error(error);
  }
},  [timestamp]);


useEffect(() => {
    getQRCode();
    console.log("checkLoginStatus被调用了的第yi次")
    checkLoginStatus(qrCodeKey);
    const intervalId = setInterval(() => {
      console.log("checkLoginStatus被调用了的第二次")
      checkLoginStatus("");
      setRefresh(true); // 手动设置refresh为true，确保立即显示刷新按钮
    }, 60000);
    return () => {
      // 清除定时器
      clearInterval(intervalId);
    };
}, [refreshButtonClicked]);

  // 按钮刷新
  const refreshClick = useCallback(() => {
    setRefresh(false)
    
  }, [])
  // 获取新的二维码之后按钮隐藏
    const handleRefresh = useCallback(() => {
      setTimestamp(Date.now())
      setRefreshButtonClicked(true);
      setRefresh(false); // 重置 refresh 状态
    }, []);

  const refreshStyles = useMemo(() => ({
    display: refresh ? 'block' : 'none'
  }), [refresh])

  const Scan = useMemo(()=>(
    <Fragment>
        <div className='qr_main'>
        <div className='qr_phone'></div>
        <div className='right'>
          <div className='title'>扫码登录</div>
          <div className='qr_code' id='qrContainer'>
            <div className='qr_code_content'>
             {qrCodeURL && <img src={qrCodeURL} alt="QR Code" style={{ width: '130px', height: '130px' }} />}          
              <div className='refresh' style={refreshStyles}>
                <p>二维码已失效</p>
              {refresh &&   <button  onClick={handleRefresh} >点击刷新</button>}
              </div>
            </div>
          </div>
          <p className="txt">
            使用&nbsp;<a className="download-link hover" href="https://music.163.com/#/download" target="_blank" rel="noreferrer">网易云音乐APP</a>&nbsp;扫码登录
          </p>
        </div>
      </div>
    </Fragment>
  ), [refreshStyles, refreshClick])

  const Success = useMemo(() => (
    <Fragment>
      <div className='suc'>
        <div className='suc-icon'></div>
        <p className='suc-txt'>扫描成功</p>
      </div>
    <div className='confirm'>请在手机上确认登录</div>
    </Fragment>
  ), []);

    return (
    <div className='qr'  ref={rootRef} >
       {
        state === AWAIT.PENDING ? Scan : Success
      }
      <div className='otherbtn'>
          <div className='other pointer' onClick={onSwitchLoginMode}>选择其他登录模式</div>
      </div>
 
    </div>
    )   
}
export default QRLogin

function componentDidMount() {
  throw new Error('Function not implemented.');
}

