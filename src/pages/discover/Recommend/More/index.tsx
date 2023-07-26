import react,{Fragment} from "react"
import { Link } from "react-router-dom";
import "./more.css"
const More:react.FC=()=>{
    return(
        <Fragment>
            <span className='more'><Link to=''>更多</Link> <i className='cor'>&nbsp;</i></span>
        </Fragment>

    )
}

export default More;