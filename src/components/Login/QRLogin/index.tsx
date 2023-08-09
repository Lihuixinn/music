/*
 * 二维码登录
 */

import React, {  Fragment, useCallback,  useEffect, useMemo, useRef, useState } from 'react'
import "../styles/qr.css"
import { AWAIT, ISetStateProps, STATUS } from '../typing';
import axios, {  CancelTokenSource } from 'axios';
import QRCode from 'qrcode';
// import Context from 'react-redux/es/components/Context';
import { cancelQR, checkQRCodeStatus, createQRCode, createQRkey } from '../../../api/qrCode';

interface IProps {
  stateCode: STATUS
}

const QRLogin: React.FC<any> = ({ onSwitchLoginMode }: { onSwitchLoginMode: () => void }, props: IProps)=>{
  const rootRef = useRef<HTMLDivElement>(null)
   // 显示二维码
   let cancelTokenSource: CancelTokenSource | null = null;
  //  const canvasRef = useRef<HTMLCanvasElement>(null)
  // 是否显示刷新器
  const [refresh, setRefresh] = useState(false)
  // 是否显示已扫码
  const [state, setState] = useState(AWAIT.PENDING)

  const [qrCode, setQRCode] = useState('');
  const [cancelToken, setCancelToken] = useState(null);
  const canvasRef = useRef(null);

  const [qrCodeKey, setQRCodeKey] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [status, setStatus] = useState('');
  const [source, setSource] = useState<CancelTokenSource | null>(null);

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

useEffect(() => {
  // 获取二维码key和图片
  async function getQRCode() {
    try {
      const response1 = await createQRkey();
      console.log(response1)
      if (response1 && response1.data) {
        setQRCodeKey(response1.data.unikey);
      } else {
        console.error('Invalid response');
        // 处理错误情况
      }
      
      const codeKey = response1.data.unikey;
      // console.log(qrCodeURL);
      const response2 = await createQRCode(codeKey);
      console.log(response2);
      // const qrCodeURL = response2.data.qrurl.replace("undefined",response1.data.unikey);
      
      const qrCodeURL = `https://music.163.com/login?codekey=${codeKey}`;
      console.log('qrCodeURL:', qrCodeURL); // 打印二维码URL

      setTimeout(() => {
        const container = document.getElementById('qrContainer');
        if (container) {
          // 创建一个 <img> 元素
          const qrImage = document.createElement('img');
          qrImage.src = qrCodeURL;
  
          // 将 <img> 元素添加到容器中
          container.appendChild(qrImage);
        } else {
          console.error('Container element not found');
          // 处理错误情况
        }
      }, 5000); // 延迟 1 秒
    
      setQRCodeURL(qrCodeURL);
      
      
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      setSource(source);
      console.log("获取成功")

      // startPolling(response1.data.unikey); // 开始轮询
    } catch (error) {
      console.error('获取二维码失败:', error);
    }
  }

  getQRCode();

  return () => {
    // 组件卸载时取消轮询
    if (source) {
      source.cancel('取消请求');
    }
  };
}, []);

// 开始轮询
// async function startPolling(key: string) {
//   setStatus('等待扫码');
//   const interval = setInterval(async () => {
//     try {
//       const response = await checkQRCodeStatus(key);
//       const { code, message } = response.data;
//       if (code === 800) {
//         setStatus('二维码过期，请刷新');
//         clearInterval(interval);
//       } else if (code === 801) {
//         setStatus('等待扫码');
//       } else if (code === 802) {
//         setStatus('请确认登录');
//       } else if (code === 803) {
//         setStatus('登录成功');
//         clearInterval(interval);
//       }
//     } catch (error) {
//       console.error('轮询出错:', error);
//     }
//   }, 1000);
//   setTimer(interval);
// }

 // 刷新二维码
  async function refreshQRCode() {
    if (source) {
      source.cancel('取消请求');
    }

    try {
      const response1 = await createQRkey();
      setQRCodeKey(response1.data.unikey);

      // 有问题
      const response2 = await createQRCode(qrCodeKey);
      setQRCodeURL(response2.data.qrurl);

      const cancelToken = axios.CancelToken;
      const newSource = cancelToken.source();
      setSource(newSource);

      // startPolling(response1.data.unikey); // 开始轮询
    } catch (error) {
      console.error('获取二维码失败:', error);
    }
  }

  const refreshStyles = useMemo(() => ({
    display: refresh ? 'block' : 'none'
  }), [refresh])

  const Scan = useMemo(()=>(
    <Fragment>
        <div className='qr_main'>
        <div className='qr_phone'></div>
        <div className='right'>
          <div className='title'>扫码登录</div>
          {qrCodeURL && <img src={qrCodeURL} alt="QR Code" style={{ width: '200px', height: '200px' }} />}
           
            {/* {status && <p>{status}</p>} */}
          <div className='qr_code' id='qrContainer'>
            <div className='qr_code_content'>
            <img src={qrCode} alt="QR Code" />
              <canvas ref={canvasRef}  style={{width:"130px",height:"130px"}}></canvas>
              <div className='refresh' style={refreshStyles}>
                <p>二维码已失效</p>
                <button  onClick={refreshQRCode} >点击刷新</button>
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

