import React from "react";

import Header from "./components/Header/index"
import Discover from "./pages/discover/index"
// import { Content } from "antd/es/layout/layout"
import {  Routes, Route, Navigate } from 'react-router-dom';
import Toplist from "./pages/Toplist";
import Login from "./components/Login"

const App:React.FC = () =>{
    return(
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
           {/* <Route path="/discover" element={<Discover/>}/> */}
            <Route path="/toplist" element={<Toplist/>}/>
            {/* <Route path="/playlist"/> */}
            {/* <Route path="/djradio" element={}/> */}
            {/* <Route path="/discover" element={<Navigate to='/discover' replace={true}></Navigate>}></Route> */}
        </Routes>
    
      </div>
  
    )
  }

export default App;

