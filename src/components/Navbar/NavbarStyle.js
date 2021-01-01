import Styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = Styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content:center;
    font-weight: 700;
`
export const NavLink = Styled.div`
    color:#fff;
    font-size: 2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor: pointer;

    @media screen and (max-width:400px){
        position: absolute;
        top: 10px;
        left:25px;

    }
`
export const NavIcon = Styled.div`
    display: block;    
    position: absolute;
    top:0;
    right:0;
    cursor: pointer;
    color:#fff;


p{
    transform: translate(-175%, 100%);
    font-weight:bold;
}
`
export const Bars = Styled(FaPizzaSlice)`
    font-size=2rem;
    transform: translate(-50%,-15%)
`
