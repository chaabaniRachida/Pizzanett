import React from 'react'
import { Container, LogoutButton } from './DisconnectStyle'
import { useHistory } from 'react-router-dom'

const Disconnect = () => {
  const history = useHistory()
  let isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Disconnect</LogoutButton>
      ) : null}
    </Container>
  )
}
export default Disconnect
