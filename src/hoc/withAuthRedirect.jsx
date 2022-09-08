import React from 'react'
import { connect } from 'react-redux'
import {Navigate} from "react-router-dom"

export default function withAuthRedirect(Component) {

  const WithAuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />
    return <Component {...props}/>
  }

  const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth
  })

  return (
    connect(mapStateToProps, null)(WithAuthRedirectComponent)
  )
}

