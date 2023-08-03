import React, { useCallback, useState, } from "react";
import MainLogin from "./mainLogin";
import QRLogin from "./QRLogin";
import "./styles/index.css";
import PubSub from 'pubsub-js'
import Context from "react-redux/es/components/Context";
import { STATUS } from './typing'
import Phone from "./phone";


const Login: React.FC<any>= ({onClose}) => {
  const [currentLoginMode, setCurrentLoginMode] = useState("qrcode");

  const handleSwitchLoginMode = () => {
    setCurrentLoginMode((prevMode) =>
      prevMode === "qrcode" ? "phone" : "qrcode"
    );
  };

  return (
    <div className="modal-center " >
      <div className="modal-container">
        <div className="modal-login">
          登录
          <i className="modal-close" onClick={onClose} >×</i>
          
        </div>
          {/* <MainLogin  /> */}
          {currentLoginMode === "qrcode" ? (
            <QRLogin onSwitchLoginMode={handleSwitchLoginMode} />
          ) : (
            <MainLogin onSwitchLoginMode={handleSwitchLoginMode} />
          )}
    
          {/* <QRLogin /> */}
         
          {/* <Phone/> */}
          
      </div>
    </div>
  );
};

export default Login;
