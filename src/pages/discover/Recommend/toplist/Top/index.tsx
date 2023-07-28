import React,{Fragment} from "react";
import {Link} from "react-router-dom"
import "./top.css"

const Top:React.FC = () =>{
    return(
        <Fragment>
        <dt className="top">
            <div className="u-cover"></div>
            <div className="tit">
              <Link to="/discover/toplist"><h3>飙升榜</h3></Link>
              <div className="btn">
                <Link to="/" className="s-bg"></Link>
                <Link to="/" className="s-bg"></Link>
              </div>
            </div>
        </dt>
        </Fragment>
    )
}

export default Top;