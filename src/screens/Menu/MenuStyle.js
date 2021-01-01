import styled from 'styled-components';
import ImgBG from '../../images/bgDessert.jpg'

export const MenuContainer = styled.div`
background: url(${ImgBG}) no-repeat center;
background-size: cover;
font-family: sans-serif;
`;

export const MenuAll = styled.div`

`

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MenuCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const MenuImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const MenusHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const MenuTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const MenuDesc = styled.p`
  margin-bottom: 1rem;
`;

export const MenuPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const MenuButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;