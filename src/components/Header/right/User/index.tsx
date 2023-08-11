/**
 * 用户
 */
import React, { useEffect, useState } from 'react'
import Username from '../User'

import {getUserStatus,cancelUser} from "../../../../api/getUserInfo"
import Login from './Login'


const initData = {
  profile: {},
  code: 200,
  account: {}
}

function User() {
  const [data, setData] = useState<any>(initData)

  // 检查登录状态
  useEffect(() => {
    getUserStatus().then(res => {
      setData(res.data)
    }).catch(rej => {

    })
    return () => {
      cancelUser.cancelGetUserStatus && cancelUser.cancelGetUserStatus()
    }
  }, [])

  return (
    <div className='top-login'>
      {(data.profile ?? {}).avatarUrl ? <Username {...data} /> : <Login />}
    </div>
  )
}

export default User

