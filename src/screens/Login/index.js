import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Container,
  Wrapper,
  Form,
  Button,
  Input,
  Group,
  Title,
  Link,
  
} from './LoginStyle'
import Logo from '../../components/Logo'
import axios from 'axios'

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    switch(name){
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value) 
        break 
      default:
        break
    }  
  }
  const Submit = e => {
    e.preventDefault()
    if(email.length === 0 || password.length === 0) {
      alert('Veuillez saisir un email et un mot de passe')
      return null
    }
    
    axios({
      method:'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data:{
          username: email,
          password: password
      }
  })
  .then(res => {
      console.log(res)
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/Home')
  })

  }
  
  return (
    <Container>
        
      <Wrapper>
          
        <Form>
        <Logo  />
          <Title>{('Bienvenu')} !</Title>
          <Group>
            <label htmlFor='email'>{('email')}</label>
            <Input type='text' name='email' required onChange={e => handleChange(e)}/>
          </Group>
          <Group>
            <label htmlFor='password'>{('password')}</label>
            <Input type='password' name='password' required onChange={e => handleChange(e)}/>
          </Group>
          <Group>
            <Button onClick={e => Submit(e)}>
              {('Se connecter')}
            </Button>
          </Group>
          <Group mt={30}>
            <Link to='/forgot-password'>{('Mot de passe oublié')} </Link>
          </Group>
          <Group mt={10}>
            <Link to='/register'>{('Créer un compte')}</Link>
          </Group>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;