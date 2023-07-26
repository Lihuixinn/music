import React, { Fragment } from "react";
import Hot from "./Hot/index"
import "./styles/recommend.css"
import SingerComponent from "./Singer/index"
const Recommend:React.FC=()=>{
 
    return (
        <Fragment>
            <div className='recommend-box' >
                <div className='recommend'> 
                    <Hot></Hot> 
                    <SingerComponent />
                </div>
                
            </div>
        </Fragment>
    )
}
export default Recommend;