import React, { Fragment } from "react";
import Hot from "./Hot/index"


const Recommend:React.FC=()=>{
 
    return (
        <Fragment>
            <div className='recommend-box' style={{position:"relative", background:"#f3f2f2"}}>
                <div className='recommend' style={{margin: "0 auto",width:"980px"}}> 
                    <Hot></Hot> 
                </div>
            </div>
        </Fragment>
    )
}
export default Recommend;