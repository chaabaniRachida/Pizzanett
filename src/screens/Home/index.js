import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Products from '../../components/Products';
import { productData, productDataTwo } from '../../components/Products/data';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import {
  HomeBody,
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomeBtn
} from './HomeStyle';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  <HomeBody>
    <HomeContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeContent>
        <HomeItems>
          <HomeH1>La plus Grande Home</HomeH1>
          <HomeP>Ready in 60 seconds</HomeP>
          <HomeBtn>Passer une commande</HomeBtn>
        </HomeItems>
      </HomeContent>
    </HomeContainer>
      <Products heading='Manger , toujours un plaisir' data={productData} />
      <Feature />
      <Products heading='Choisir le déssert' data={productDataTwo} />
      <Footer />
    </HomeBody>
  
    
    
  );
};

export default Home;