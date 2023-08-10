/*
 * 二维码登录
 */

import React, {  Fragment, useCallback,  useEffect, useMemo, useRef, useState } from 'react'
import "../styles/qr.css"
import { AWAIT, ISetStateProps, STATUS } from '../typing';
// import Context from 'react-redux/es/components/Context';
import {  checkQRCodeStatus, createQRCode, createQRkey, } from '../../../api/qrCode';

interface IProps {
  stateCode: STATUS
}

const QRLogin: React.FC<any> = ({ onSwitchLoginMode }: { onSwitchLoginMode: () => void }, props: IProps)=>{
  const rootRef = useRef<HTMLDivElement>(null)
  // 是否显示刷新器
  const [refresh, setRefresh] = useState(false)
  // 是否显示已扫码
  const [timestamp, setTimestamp] = useState(Date.now());
  const [state, setState] = useState(AWAIT.PENDING)
// 显示二维码
  const [qrCodeKey, setQRCodeKey] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

// 按钮刷新
  const refreshClick = useCallback(() => {
    setRefresh(false)
  }, [])

//  useEffect(() => {
//     // 生成二维码
//     async function generateQRCode() {
//       try {
//         // 获取密钥
//         cancelTokenSource = axios.CancelToken.source();
//         console.log(cancelTokenSource);
        
//         const keyResponse = await axios.post('https://netease-cloud-music-api-zeta-bice.vercel.app/login/qr/key', {
//           timestamp: Date.now()
//         }, {
//           cancelToken: cancelTokenSource.token
//         });

//         const key = keyResponse.data.unikey;
//         console.log("2222",keyResponse.data);
      
//         // 在Canvas上绘制二维码
//         if (canvasRef.current) {
//           await QRCode.toCanvas(canvasRef.current, 'your_text_here');
//           console.log('二维码生成成功');
//         }
//       } catch (error) {
//         if (axios.isCancel(error)) {
//           console.log('取消生成二维码');
//         } else {
//           console.error('生成二维码失败:', error);
//         }
//       }
//     }
//     // 组件挂载时生成二维码
//     generateQRCode();

//     // 组件卸载时取消生成二维码请求
//     return () => {
//       if (cancelTokenSource) {
//         cancelTokenSource.cancel('取消生成二维码');
//       }
//     };
//   }, []);

  // 获取二维码key和图片
  async function getQRCode() {
    try {
      const response1 = await createQRkey();
      console.log(response1)
      const uniKey = response1.data.unikey;
      if (response1 && response1.data) {
        setQRCodeKey(response1.data.unikey);
      } else {
        console.error('Invalid response');
      }
      checkLoginStatus(uniKey);
      fetchData(uniKey);
    } catch (error) {
      console.error('获取二维码失败:', error);
    }
  }
  const fetchData = async (uniKey: string) => {
    try {
        const response2 = await createQRCode(uniKey);
        console.log("1111",response2);
        const qrCodeURL = response2.data.qrimg;
        setQRCodeURL(qrCodeURL)
        console.log('qrCodeURL:', qrCodeURL); // 打印二维码URL
      } catch (error) {
        console.error(error);
      }
    };

 // 开始轮询
const checkLoginStatus = useCallback(async (uniKey: string) => {
  try {
    console.log("checkLoginStatus被调用了的第三次")
    let timestamp:number = Date.now()
    const response:any = await checkQRCodeStatus(uniKey);
    console.log("response响应了吗",response)
    const { data: { code } } = response;
    console.log("ybdiusdbfbj....")
    console.log("12112",response.data);
    if (!response || !response.data) return;
    if (Date.now() - timestamp >= 6000) {
      setRefresh(true);
  
      setTimestamp(Date.now()); // 更新时间戳
    } else if (code === 801) {
      // 等待扫码中...
      setLoginStatus('等待扫码中...');
      setRefresh(true);
    } else if (code === 802) {
      timestamp = Date.now()
      // 待确认...
      setRefresh(true); 
      setLoginStatus('待确认...');
    } else if (code === 803) {
      
      setRefresh(false);
      // 登录成功
      setLoginStatus('登录成功');
    }
  } catch (error) {
    console.error(error);
    // 处理错误情况
  }
}, [qrCodeKey,setQRCodeKey]);


useEffect(() => {
    getQRCode();
      // 每隔60秒检查登录状态
      console.log("checkLoginStatus被调用了的第一次")
    const intervalId = setInterval(() => {
      console.log("checkLoginStatus被调用了的第二次")
      checkLoginStatus(qrCodeKey);
    }, 6000);

    return () => {
      // 清除定时器
      clearInterval(intervalId);
    };
}, [qrCodeKey]);

    const handleRefresh = useCallback(() => {
      getQRCode();
      setRefresh(false); // 重置 refresh 状态
    }, [getQRCode]);

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
  ), [])

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

