import React from 'react';
import { Nav, NavLink, NavIcon, Bars} from './NavbarStyle'; 
import Disconnect from '../Disconnect';
import Logo from '../Logo'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
      <Disconnect/>
      <Logo/>
        <NavLink to='/'>Pizzanet</NavLink>
        
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
      
    </>
  );
};

export default Navbar;