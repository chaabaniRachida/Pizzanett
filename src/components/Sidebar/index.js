import React from 'react';
import ProductDessert from '../../screens/ProductDessert';
import ProductPizza from '../../screens/ProductPizza';
import Menu from '../../screens/Menu';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarStyle';


const Sidebar = ({ isOpen, toggle }) => {
    const FancyLink = React.forwardRef((props, ref) => (
        <a ref={ref} {...props}> {props.children}</a>
      ))
      
      
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
          <SidebarLink current={ProductPizza.pathname === '/ProductPizza'} to='/ProductPizza'>
            Pizza  
          </SidebarLink>
          <SidebarLink current={ProductDessert.pathname === '/ProductDessert'} to='/ProductDessert'>   
            Dessert
          </SidebarLink>
          <SidebarLink current={Menu.pathname === '/Menu'} to='/Menu'>   
            Menu 
          </SidebarLink>
  
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Passer une commande </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;