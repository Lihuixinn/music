import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../../../Login";

const Toplogin:React.FC=()=>{
    const [showLogin, setShowLogin] = useState(false);
    
    const handleLoginButtonClick = () => {
    setShowLogin(true);
    };

    const handleCloseButtonClicked = () => {
    setShowLogin(false);
    };
    return(
        <div className="login">
        {
         
              <Link to='/' onClick={handleLoginButtonClick}>登录</Link>
       
        }
        {
          showLogin &&(
              <Login onClose={handleCloseButtonClicked}/>
          )
        }
      </div>
    )

}

export default Toplogin;