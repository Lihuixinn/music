import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import More from "../More/index"
import "./album.css"
 
const Album:React.FC = ()=>{
    return (
        <Fragment>
            {/* 导航栏部分 */}
            <div className="n-new">
                <Link to="/discover/album" className="tit">新碟上架</Link>
                <More/>
            </div>
            {/* 内容部分 */}
            <div className="n-disk">
              <div className="inner">
                  <Link to=''></Link>
              </div>  
            </div>
        </Fragment>
    )
}

export default Album;