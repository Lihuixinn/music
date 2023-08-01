import  React from 'react'
import Left from "../Header/left"
import Right from "../Header/right"
import BottomNav from "../Header/bottomNav"
import  './styles/index.css'


const Header:React.FC=()=>{
 
    return(
       <div>
         <div className='top-box'>
          <div className='top-content'>
           <Left/>
           <Right/>
         </div>   
       </div>
        <BottomNav/>
      
       </div>

      
    )
}

export default Header;