import React, { useCallback, useState, } from "react";
import MainLogin from "./mainLogin";
import QRLogin from "./QRLogin";
import "./styles/index.css";

const Login: React.FC = () => {
 
  return (
    <div className="modal-center">
      <div className="modal-container">
        <div className="modal-login">
          登录
          <i className="modal-close">×</i>
        </div>
        
          {/* <MainLogin  /> */}
    
          <QRLogin  />
      </div>
    </div>
  );
};

export default Login;
