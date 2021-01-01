/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
const Connected = ({ component: Component, ...rest }) => {
  const loggedIn = true
  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

export default Connected
