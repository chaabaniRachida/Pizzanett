import styled from 'styled-components'
import { Link as A } from 'react-router-dom'
import Background from '../../images/bg.jpg'

export const Container = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  font-family: sans-serif;
`
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  position: relative;
  width: 90vw;
  max-width: 380px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.08);
    transform: skewX(-26deg);
    transform-origin: bottom left;
    border-radius: 10px;
    pointer-events: none;
  }
  .label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 1rem;
    pointer-events: none;
    transition: 3s ease-out;
  }
  .input:focus + label,
  .input:valid + label {
    transform: translateY(-18px);
    color: #ff652f;
    font-size: 8rem;
  }
`
export const Logo = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto }
`

export const Title = styled.h2`
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 2rem;
  color: #ff652f;
`
export const Group = styled.div`
  position: relative;
  ${(props) => (props.mt ? `margin-top: ${props.mt}px` : '')}
`
export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: inherit;
  &:focus {
    border-bottom: 1px solid #ff652f;
  }
`
export const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #9c471f;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`
export const Link = styled(A)`
  color: #ff652f;
  font-size: 16px;
`
