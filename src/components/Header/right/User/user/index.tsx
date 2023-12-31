/**
 * 登录状态
 */
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../../../api/mangeLogin'


// 初始化登录数据
interface IProps  {
    profile: { [propsName: string]: any },
    code: number,
    account: { [propsName: string]: any }
  }
  
const person:React.FC<any> = (props: IProps)=>{
  const { profile } = props
  const { avatarUrl, userId } = profile

  const logoutClick = useCallback(() => {
    logout().then(res => {
      window.location.reload()
    })
  }, [])

  return (
    <>
      <div className='head'>
        <img src={avatarUrl + '?param=30y30'} alt="头像" />
      </div>
      {/* 列表 */}
      <div className='m-tlist'>
        <ul>
          <li className='pointer'>
            <Link to='user/home+ `?id=${userId}`'>
              <i className='icn icn-hm toplist_img'></i>
              <em>我的主页</em>
            </Link>
          </li>
          <li className='pointer'>
            <Link to='mas/at'>
              <i className='icn icn-msg toplist_img'></i>
              <em>我的信息</em>
            </Link>
          </li>
          <li className='pointer'>
            <Link to='user/level + `?id=${userId}`'>
              <i className='icn icn-lv toplist_img'></i>
              <em>我的等级</em>
            </Link>
          </li>
          <li className='pointer'>
            <Link to='user/mumber'>
              <i className='icn icn-mbr toplist_img'></i>
              <em>vip会员</em>
            </Link>
          </li>
          <li className='pointer'>
            <Link to='user/update'>
              <i className='icn icn-st toplist_img'></i>
              <em>个人设置</em>
            </Link>
          </li>
          <li className='pointer'>
            <a href='https://music.163.com/st/userbasic/?module=st%2Fuserbasic%2F#/nameverify' target='_blank' rel='noreferrer'>
              <i className='icn icn-verify toplist_img'></i>
              <em>实名认证</em>
            </a>
          </li>
          <li className='pointer' onClick={logoutClick}>
            <span>
              <i className='icn icn-ex toplist_img'></i>
              <em>退出</em>
            </span>
          </li>
        </ul>
        <i className='arr toplist_img'></i>
      </div>
    </>
  )
}

export default person;
