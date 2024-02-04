import React from 'react'
import { Navigate, Outlet } from 'react-router'

const Authentication = ({children}) => {
    const token = localStorage.getItem("accessToken")
    if(token){
      return <Navigate to="/menu" />
    }
  return (
    <div>{children || <Outlet />}</div>
  )
}

export default Authentication