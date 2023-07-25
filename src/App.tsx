import React from "react";

import Header from "./components/Header/index"
import Discover from "./pages/discover/index"
// import { Content } from "antd/es/layout/layout"
import {  Routes, Route } from 'react-router-dom';



const App:React.FC = () =>{
    return(
      <div className="App">
        <Header/>
        <Discover/>
        <Routes>
           <Route path="/discover" element={<Discover/>}/>
            {/* <Route path="/toplist"/> */}
            {/* <Route path="/playlist"/> */}
            {/* <Route path="/djradio" element={}/> */}
        </Routes>
    
      </div>
  
    )
  }

export default App;

