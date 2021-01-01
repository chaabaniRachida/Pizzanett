import React from 'react';
import {dataMenu} from './DataMenu';
import Return from '../../components/Return'

import Footer from '../../components/Footer';


import {
  MenuAll,
  MenuContainer,
  MenuWrapper,
  MenusHeading,
  MenuTitle,
  MenuCard,
  MenuImg,
  MenuInfo,
  MenuDesc,
  MenuPrice,
  MenuButton
} from './MenuStyle';


const Menu = () => {
  let heading ='Choisir le Menu';
  return (
    <MenuAll>
    <MenuContainer>
    <Return/>
      <MenusHeading>{heading}</MenusHeading>
      <MenuWrapper>
        {dataMenu.map((product, index) => {
        
          return (
            <MenuCard key={index}>
              <MenuImg src={product.img} alt={product.alt} />
              <MenuInfo>
                <MenuTitle>{product.name}</MenuTitle>
                <MenuDesc>{product.desc}</MenuDesc>
                <MenuPrice>{product.price}</MenuPrice>
                <MenuButton>{product.button}</MenuButton>
              </MenuInfo>
            </MenuCard>
          );
        })}
      </MenuWrapper>
    </MenuContainer>
    <Footer/>
    </MenuAll>
  );
};

export default Menu;

