import Raect,{Fragment} from "react"
import {Link} from "react-router-dom"
import More from  "../More/index"
import Top from "./Top/index"
import "./toplist.css"

const Toplist:React.FC = ()=>{
  return (
    <Fragment>
      <div className='toplist'>
        <Link to="/discover/toplist" className="tit">榜单</Link>
        <More/>
      </div>
      <div className='n-blist'>
        <dl className="blk">
          <Top/>
        </dl>
        <dl className="blk"></dl>
        <dl className="blk"></dl>
      </div>
    </Fragment>

  )
}

export default Toplist;